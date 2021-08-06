export class GameLoop {
  constructor (
    requestAnimationFrame = () => {}, cancelAnimationFrame = () => {},
    player = {}, enemies = []) {
    this.times = {
      start: null,
      last: null,
      game: 0
    }

    this.id = null
    this.requestAnimationFrame = requestAnimationFrame
    this.cancelAnimationFrame = cancelAnimationFrame

    this.player = player
    this.enemies = enemies
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

    this.id = this.requestAnimationFrame(this.mainLoop)
  }

  calcFps (delta) {
    return 1000 / delta
  }

  start () {
    this.id = this.requestAnimationFrame(this.mainLoop)
  }

  stop () {
    this.cancelAnimationFrame(this.id)
  }
}
