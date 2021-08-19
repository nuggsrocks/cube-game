export class Rect {
  constructor ({ x = 0, y = 0, size = 0, speedX = 0, speedY = 0 } = {}) {
    this.x = x
    this.y = y
    this.size = size
    this.speedX = speedX
    this.speedY = speedY
  }

  move (timeDelta, canvas) {
    this.x += this.speedX / (10 / timeDelta)
    this.y += this.speedY / (10 / timeDelta)

    this.handleBorderCollision(canvas)
  }

  draw (ctx) {
    ctx.fillRect(this.x, this.y, this.size, this.size)
  }

  handleBorderCollision (canvas) {
    let collision = false

    if (this.x < 0) {
      this.reverseSpeed('x')
      this.x = 0
      collision = true
    }

    if (this.x > canvas.width - this.size) {
      this.reverseSpeed('x')
      this.x = canvas.width - this.size
      collision = true
    }

    if (this.y < 0) {
      this.reverseSpeed('y')
      this.y = 0
      collision = true
    }

    if (this.y > canvas.height - this.size) {
      this.reverseSpeed('y')
      this.y = canvas.height - this.size
      collision = true
    }

    return collision
  }

  hasCollidedWithRect (rect) {
    const rectPoints = [
      { x: rect.x, y: rect.y },
      { x: rect.x + rect.size, y: rect.y },
      { x: rect.x, y: rect.y + rect.size },
      { x: rect.x + rect.size, y: rect.y + rect.size }
    ]

    this.points = [
      { x: this.x, y: this.y },
      { x: this.x + this.size, y: this.y },
      { x: this.x, y: this.y + this.size },
      { x: this.x + this.size, y: this.y + this.size }
    ]

    for (const point of rectPoints) {
      const betweenXPoints = point.x > this.x && point.x < this.x + this.size

      const betweenYPoints = point.y > this.y && point.y < this.y + this.size

      if (betweenXPoints && betweenYPoints) {
        return true
      }
    }

    for (const point of this.points) {
      const betweenXPoints = point.x > rect.x && point.x < rect.x + rect.size

      const betweenYPoints = point.y > rect.y && point.y < rect.y + rect.size

      if (betweenXPoints && betweenYPoints) {
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
