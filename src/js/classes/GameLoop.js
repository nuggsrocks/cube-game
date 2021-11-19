import { gameStates } from '../gameStates'
import { Player } from './Player'
import { createEnemies } from '../functions/createEnemies'
import { mainLoop } from '../functions/mainLoop'

export class GameLoop {
  constructor ({ window, canvas } = {}) {
    this.gameState = gameStates.MENU

    this.id = null
    this.window = window

    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.reset()
  }

  reset () {
    this.times = {
      start: null,
      last: null,
      game: 0,
    }

    this.frames = {
      count: 0,
      delta: 0,
      fps: 0,
    }

    this.player = new Player(
      { window: window, rect: { x: 10, y: 10, size: 20 } })

    this.enemies = createEnemies(this)

  }

  calcFps (delta, frameCount) {
    return 1000 * frameCount / delta
  }

  start () {
    const loop = (currentTime) => {
      mainLoop(this, currentTime)
      this.id = this.window.requestAnimationFrame(loop)
    }
    this.id = this.window.requestAnimationFrame(loop)
  }

  stop () {
    this.window.cancelAnimationFrame(this.id)
  }
}
