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

  handleBorderCollision (canvas) {
    const playerCollisions = super.detectBorderCollision(canvas)

    if (playerCollisions.includes('left')) {
      this.speedX = 0
      this.x = 0
    }

    if (playerCollisions.includes('right')) {
      this.speedX = 0
      this.x = canvas.width - this.size
    }

    if (playerCollisions.includes('top')) {
      this.speedY = 0
      this.y = 0
    }

    if (playerCollisions.includes('bottom')) {
      this.speedY = 0
      this.y = canvas.height - this.size
    }
  }

  draw (ctx) {
    ctx.save()

    ctx.fillStyle = 'black'

    super.draw(ctx)

    ctx.restore()
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
