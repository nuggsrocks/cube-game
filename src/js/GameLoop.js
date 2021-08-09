export class GameLoop {
  constructor ({
    window = {
      requestAnimationFrame: () => {},
      cancelAnimationFrame: () => {}
    },
    player = {
      draw: () => {},
      move: () => {},
      handleBorderCollision: () => {}
    },
    enemies = [],
    canvas = {
      getContext: () => ({
        clearRect: () => {},
        fillRect: () => {}
      })
    }
  } = {}) {
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

  time (currentTime) {
    return currentTime - this.times.start
  }

  mainLoop (currentTime) {
    if (this.times.start === null) {
      this.times.start = currentTime
    }

    this.times.game = this.time(currentTime)

    this.player.move(this.player.speedX, this.player.speedY)

    this.player.handleBorderCollision(this.canvas)

    for (const enemy of this.enemies) {
      enemy.move(enemy.speedX, enemy.speedY)
    }

    const ctx = this.canvas.getContext('2d')

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.player.draw(ctx)

    for (const enemy of this.enemies) {
      enemy.draw(ctx)
    }

    for (const enemy of this.enemies) {
      if (this.player.hasCollidedWithRect(enemy)) {
        return this.stop()
      }
    }

    this.times.last = currentTime

    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  calcFps (delta) {
    return 1000 / delta
  }

  start () {
    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  stop () {
    this.window.cancelAnimationFrame(this.id)
  }
}
