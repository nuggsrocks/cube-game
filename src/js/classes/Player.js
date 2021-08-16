import { Rect } from './Rect'

export class Player extends Rect {
  constructor ({ window, rect }) {
    super(rect)

    this.window = window

    this.inputStates = {
      ArrowUp: false,
      ArrowRight: false,
      ArrowDown: false,
      ArrowLeft: false,
      Space: false
    }

    this.window.onkeydown = (event) => this.onKeyDown(event)
    this.window.onkeyup = (event) => this.onKeyUp(event)
  }

  onKeyDown (event) {
    if (this.inputStates[event.code] !== undefined) {
      this.inputStates[event.code] = true
    }
    this.setSpeed()
  }

  onKeyUp (event) {
    if (this.inputStates[event.code] !== undefined) {
      this.inputStates[event.code] = false
    }
    this.setSpeed()
  }

  setSpeed () {
    this.speedX = this.speedY = 0

    if (this.inputStates.ArrowLeft) {
      this.speedX = -1
    }
    if (this.inputStates.ArrowUp) {
      this.speedY = -1
    }
    if (this.inputStates.ArrowRight) {
      this.speedX = 1
    }
    if (this.inputStates.ArrowDown) {
      this.speedY = 1
    }
    if (this.inputStates.Space) {
      this.speedX *= 2
      this.speedY *= 2
    }
  }
}
