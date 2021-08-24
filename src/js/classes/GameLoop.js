import {gameStates} from '../constants/gameStates'
import { createMainMenu } from '../ui/createMainMenu'
import { createGameOverMenu } from '../ui/createGameOverMenu'
import { Player } from './Player'
import { Enemy } from './Enemy'

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

export class GameLoop {
  constructor ({
    window = {},
    canvas = {}
  } = {}) {
    this.gameState = gameStates.MENU

    this.id = null
    this.window = window

    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.mainMenu = createMainMenu(this.canvas)

    this.mainLoop = this.mainLoop.bind(this)

    this.reset()
  }

  reset() {
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


    this.player = new Player({ window: window, rect: { x: 10, y: 10, size: 20 } })

    this.enemies = []

    let i = 0

    while (i < 10) {
      this.enemies.push(
        new Enemy({
          rect: {
            x: getRandomNumber(this.canvas.width / 2, this.canvas.width - 50),
            y: getRandomNumber(0, this.canvas.height - 50),
            size: getRandomNumber(10, 50),
            speedX: getRandomNumber(-5, 5),
            speedY: getRandomNumber(-5, 5)
          }
        })
      )
      i++
    }
  }

  mainLoop (currentTime) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    if (this.gameState === gameStates.MENU) {
      this.ctx.drawImage(this.mainMenu, 0, 0)
      this.canvas.onclick = (event) => {
        this.reset()
        this.gameState = gameStates.RUNNING
        this.canvas.onclick = null
      }
    }

    if (this.gameState === gameStates.OVER) {
      const score = Math.round(this.times.game) / 1000
      const gameOverMenu = createGameOverMenu(this.canvas, score)

      this.ctx.drawImage(gameOverMenu, 0, 0)

      this.canvas.onclick = (event) => {
        this.reset()
        this.gameState = gameStates.RUNNING
        this.canvas.onclick = null
      }
    }

    if (this.gameState === gameStates.RUNNING) {
      if (this.times.start === null) {
        this.times.start = currentTime
      }

      if (this.times.last === null) {
        this.times.last = currentTime
      }

      this.times.game = currentTime - this.times.start

      for (const enemy of this.enemies) {
        if (this.player.hasCollidedWithRect(enemy)) {
          this.gameState = gameStates.OVER
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
        this.frames.count = 0
        this.frames.delta = 0
      }

      this.ctx.save()

      this.ctx.font = '16px sans-serif'

      this.ctx.fillText(this.frames.fps.toFixed(2) + ' fps', this.canvas.width * 11 / 12, this.canvas.height / 20)
      this.ctx.fillText('Time: ' + (this.times.game / 1000).toFixed(2) + ' s', this.canvas.width * 11 / 12, this.canvas.height / 10)

      this.ctx.restore()

      this.player.draw(this.ctx)

      for (const enemy of this.enemies) {
        enemy.draw(this.ctx)
      }

      this.times.last = currentTime
    }

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
