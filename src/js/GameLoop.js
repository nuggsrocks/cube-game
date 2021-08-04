export class GameLoop {
  constructor (requestAnimationFrame = () => {}, cancelAnimationFrame = () => {}) {
    this.startTime = null
    this.lastTime = null
    this.id = null
    this.requestAnimationFrame = requestAnimationFrame
    this.cancelAnimationFrame = cancelAnimationFrame
  }

  time (currentTime) {
    return currentTime - this.startTime
  }

  mainLoop (currentTime) {
    if (this.startTime === null) {
      this.startTime = currentTime
    }

    this.lastTime = currentTime

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
