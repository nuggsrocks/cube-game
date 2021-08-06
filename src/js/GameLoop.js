export class GameLoop {
  constructor (
    window = {
      requestAnimationFrame: () => {},
      cancelAnimationFrame: () => {}
    },
    player = {}, enemies = []) {
    this.times = {
      start: null,
      last: null,
      game: 0
    }

    this.id = null
    this.window = window

    this.player = player
    this.enemies = enemies

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
