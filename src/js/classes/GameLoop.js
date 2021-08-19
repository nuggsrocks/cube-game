export class GameLoop {
  constructor ({
    window = {},
    player = {},
    enemies = [],
    canvas = {}
  } = {}) {
    this.times = {
      start: null,
      last: null,
      game: 0
    }

    this.frames = {
      count: 0,
      delta: 0,
      fps: 0
    }

    this.id = null
    this.window = window

    this.player = player
    this.enemies = enemies

    this.canvas = canvas

    this.mainLoop = this.mainLoop.bind(this)
  }

  mainLoop (currentTime) {
    if (this.times.start === null) {
      this.times.start = currentTime
    }

    if (this.times.last === null) {
      this.times.last = currentTime
    }

    this.times.game = currentTime - this.times.start

    for (const enemy of this.enemies) {
      if (this.player.hasCollidedWithRect(enemy)) {
        return this.stop()
      }
    }

    const delta = currentTime - this.times.last

    this.player.move(delta, this.canvas)

    for (const enemy of this.enemies) {
      enemy.move(delta, this.canvas)
    }


    this.frames.count++
    this.frames.delta += delta

    if (this.frames.delta > 500) {
      this.frames.fps = this.calcFps(this.frames.delta, this.frames.count)
    }

    const ctx = this.canvas.getContext('2d')

    ctx.save()

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    ctx.font = '16px sans-serif'

    ctx.fillText(this.frames.fps.toFixed(2) + ' fps', this.canvas.width * 11 / 12, this.canvas.height / 20)
    ctx.fillText('Time: ' + (this.times.game / 1000).toFixed(2) + ' s', this.canvas.width * 11 / 12, this.canvas.height / 10)

    this.player.draw(ctx)

    ctx.fillStyle = 'red'
    for (const enemy of this.enemies) {
      enemy.draw(ctx)
    }

    ctx.restore()

    this.times.last = currentTime

    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  calcFps (delta, frameCount) {
    return 1000 * frameCount / delta
  }

  start () {
    this.id = this.window.requestAnimationFrame(this.mainLoop)
  }

  stop () {
    this.window.cancelAnimationFrame(this.id)

  }
}
