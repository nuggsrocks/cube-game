import { Rect } from './Rect'

export class GameLoop {
  constructor (
    requestAnimationFrame = () => {}, cancelAnimationFrame = () => {},
    player = new Rect(), enemies = []) {

    this.startTime = null
    this.lastTime = null
    this.id = null
    this.requestAnimationFrame = requestAnimationFrame
    this.cancelAnimationFrame = cancelAnimationFrame

    this.player = player
    this.enemies = enemies
  }

  time (currentTime) {
    return currentTime - this.startTime
  }

  mainLoop (currentTime) {
    if (this.startTime === null) {
      this.startTime = currentTime
    }


    for (const enemy of this.enemies) {
      if (this.player.hasCollidedWithRect(enemy)) {
        return this.stop()
      }
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
