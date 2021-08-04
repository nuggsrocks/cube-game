export class Rect {
  constructor ({ x = 0, y = 0, size = 0, speedX = 0, speedY = 0 } = {}) {
    this.x = x
    this.y = y
    this.size = size
    this.speedX = speedX
    this.speedY = speedY
  }

  move (deltaX, deltaY) {
    this.x += deltaX
    this.y += deltaY
  }

  hasCollidedWithBorder (canvas) {
    let collidedBorder = false

    if (this.x < 0) {
      collidedBorder = 'left'
    }

    if (this.x > canvas.width - this.size) {
      collidedBorder = 'right'
    }

    if (this.y < 0) {
      if (collidedBorder !== false) {
        collidedBorder = [collidedBorder, 'top']
      } else {
        collidedBorder = 'top'
      }
    }

    if (this.y > canvas.width - this.size) {
      if (collidedBorder !== false) {
        collidedBorder = [collidedBorder, 'bottom']
      } else {
        collidedBorder = 'bottom'
      }
    }

    return collidedBorder
  }

  hasCollidedWithRect (rect) {
    const rectPoints = [
      { x: rect.x, y: rect.y },
      { x: rect.x + rect.size, y: rect.y },
      { x: rect.x, y: rect.y + rect.size },
      { x: rect.x + rect.size, y: rect.y + rect.size }
    ]

    for (const point of rectPoints) {
      if (point.x > this.x && point.x < this.x + this.size && point.y > this.y && point.y < this.y + this.size) {
        return true
      }
    }

    return false
  }

  reverseSpeed (...axes) {
    for (const axis of axes) {
      if (axis === 'x') {
        this.speedX *= -1
        if (this.speedX === 0) {
          this.speedX = 0
        }
      } else {
        this.speedY *= -1
        if (this.speedY === 0) {
          this.speedY = 0
        }
      }
    }
  }
}
