export class Rect {
  constructor () {
    this.x = 0
    this.y = 0
  }

  move (deltaX, deltaY) {
    this.x += deltaX
    this.y += deltaY
  }
}
