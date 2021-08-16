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


    this.id = null
    this.window = window

    this.player = player
    this.enemies = enemies

    this.canvas = canvas

    this.mainLoop = this.mainLoop.bind(this)
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
