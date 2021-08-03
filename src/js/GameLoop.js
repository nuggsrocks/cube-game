export class GameLoop {
  constructor (requestAnimationFrame = () => {}, cancelAnimationFrame = () => {}) {
    this.frames = 0

    this.lastTime = null
    this.id = null
    this.requestAnimationFrame = requestAnimationFrame
    this.cancelAnimationFrame = cancelAnimationFrame
  }

  mainLoop (currentTime) {




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
