import gameStates from '../constants/gameStates'

export class GameLoop {
  constructor ({
    window = {},
    player = {},
    enemies = [],
    canvas = {}
  } = {}) {
    this.gameState = gameStates.MENU

    this.times = {
      start: null,
      last: null,
      game: 0
    }

    this.inputStates = {
      ArrowUp: false,
      ArrowRight: false,
      ArrowDown: false,
      ArrowLeft: false,
      Space: false
    }

    this.id = null
    this.window = window

    this.window.onkeydown = (event) => this.onKeyDown(event)
    this.window.onkeyup = (event) => this.onKeyUp(event)

    this.player = player
    this.enemies = enemies

    this.canvas = canvas

    this.mainLoop = this.mainLoop.bind(this)
  }

  onKeyDown (event) {
    if (this.inputStates[event.code] !== undefined) {
      this.inputStates[event.code] = true
    }
  }

  onKeyUp (event) {
    if (this.inputStates[event.code] !== undefined) {
      this.inputStates[event.code] = false
    }
  }

  mainLoop (currentTime) {
    if (this.times.start === null) {
      this.times.start = currentTime
    }

    if (this.times.last === null) {
      this.times.last = currentTime
    }

    this.times.game = currentTime - this.times.start

    for (const enemy of this.enemies) {
      if (this.player.hasCollidedWithRect(enemy)) {
        return this.stop()
      }
    }

    this.player.move(currentTime - this.times.last, this.canvas)

    for (const enemy of this.enemies) {
      enemy.move(currentTime - this.times.last, this.canvas)
    }

    const ctx = this.canvas.getContext('2d')

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.player.draw(ctx)

    for (const enemy of this.enemies) {
      enemy.draw(ctx)
    }

    this.player.speedX = this.player.speedY = 0

    if (this.inputStates.ArrowLeft) {
      this.player.speedX = -1
    }
    if (this.inputStates.ArrowUp) {
      this.player.speedY = -1
    }
    if (this.inputStates.ArrowRight) {
      this.player.speedX = 1
    }
    if (this.inputStates.ArrowDown) {
      this.player.speedY = 1
    }
    if (this.inputStates.Space) {
      this.player.speedX *= 2
      this.player.speedY *= 2
    }

    this.times.last = currentTime

    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  calcFps (delta) {
    return 1000 / delta
  }

  start () {
    this.gameState = gameStates.RUNNING
    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  stop () {
    this.gameState = gameStates.OVER
    this.window.cancelAnimationFrame(this.id)
  }
}
