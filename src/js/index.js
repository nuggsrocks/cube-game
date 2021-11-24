import 'regenerator-runtime/runtime'

import '../scss/style.scss'

import { Player } from './classes/Player'
import { createEnemies } from './functions/createEnemies'
import { drawFrame } from './functions/drawFrame'
import { handleFrames } from './functions/handleFrames'
import { isGameOver } from './functions/isGameOver'
import { handleTimes } from './functions/handleTimes'
import { saveScoreToDb } from './functions/saveScoreToDb'
import { moveRects } from './functions/moveRects'
import { resetGame } from './functions/resetGame'
import { resetTimes } from './functions/resetTimes'
import { resetFrames } from './functions/resetFrames'

const canvas = document.querySelector('canvas')

const root = document.querySelector('main')

const borderWidth = 2

canvas.width = root.clientWidth - borderWidth * 2
canvas.height = root.clientHeight

const mainMenu = document.querySelector('#main-menu')
const gameOverMenu = document.querySelector('#game-over-menu')

const form = mainMenu.querySelector('form')

form.onsubmit = (event) => {
  event.preventDefault()

  localStorage.setItem('name', form.querySelector('#name'))
  game.difficulty = form.querySelector('#difficulty').value

  game.enemies = createEnemies(game)

  mainMenu.style.setProperty('display', 'none')
  canvas.style.setProperty('display', 'flex')
  game.id = window.requestAnimationFrame(game.mainLoop)
}

const game = {
  canvas,
  times: resetTimes({}),
  frames: resetFrames({}),
  player: new Player({ window: window, rect: { x: 10, y: 10, size: 20 } }),
  mainLoop: (currentTime) => {
    if (isGameOver(game)) {
      window.cancelAnimationFrame(game.id)
      return game.end()
    }

    handleTimes(game, currentTime)

    const delta = currentTime - game.times.last

    handleFrames(game, delta)

    moveRects(game, delta)

    const ctx = game.canvas.getContext('2d')

    ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)

    drawFrame(game, ctx)

    game.times.last = currentTime

    game.id = window.requestAnimationFrame(game.mainLoop)
  },
  end: () => {
    canvas.style.setProperty('display', 'none')

    const score = game.times.game

    gameOverMenu.querySelector('#score').textContent = Math.round(score) / 1000

    saveScoreToDb(score)

    gameOverMenu.querySelector('button').onclick = () => {
      gameOverMenu.style.setProperty('display', 'none')
      canvas.style.setProperty('display', 'flex')

      resetGame(game)
      game.id = window.requestAnimationFrame(game.mainLoop)
    }

    gameOverMenu.style.setProperty('display', 'flex')
  }
}
