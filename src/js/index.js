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

class Menu extends HTMLElement {
  constructor (templateId) {
    super()
    const template = document.querySelector(templateId)
    const styleTemplate = document.querySelector('#menu-style-template')
    const selectTemplate = document.querySelector('#select-difficulty-template')

    this.attachShadow({mode: 'open'})

    this.shadowRoot.append(styleTemplate.content.cloneNode(true))
    this.shadowRoot.append(template.content.cloneNode(true))

    this.shadowRoot.querySelector('slot[name="select-difficulty"]').append(selectTemplate.content.cloneNode(true))
  }
}

class MainMenu extends Menu {
  constructor () {
    super('#main-menu-template')
  }
}

class GameOverMenu extends Menu {
  constructor () {
    super('#game-over-menu-template')
  }
}

customElements.define('main-menu', MainMenu)
customElements.define('game-over', GameOverMenu)

const mainMenu = new MainMenu()
const gameOverMenu = new GameOverMenu()

root.append(mainMenu)

const form = mainMenu.shadowRoot.querySelector('form')

const nameInput = form.querySelector('input#name')
const difficultySelect = form.querySelector('select')

if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name')
}

form.onsubmit = (event) => {
  event.preventDefault()

  localStorage.setItem('name', nameInput.value)

  game.difficulty = difficultySelect.value

  game.enemies = createEnemies(game)

  mainMenu.remove()
  canvas.style.setProperty('display', 'flex')
  game.id = window.requestAnimationFrame(game.mainLoop)
}

const game = {
  canvas,
  times: resetTimes(),
  frames: resetFrames(),
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

    saveScoreToDb(localStorage.name, score, game.difficulty)

    gameOverMenu.shadowRoot.querySelector('#score').textContent = Math.round(score) / 1000

    gameOverMenu.shadowRoot.querySelector('button').onclick = () => {
      gameOverMenu.remove()
      canvas.style.setProperty('display', 'flex')

      resetGame(game)
      game.id = window.requestAnimationFrame(game.mainLoop)
    }

    root.append(gameOverMenu)
  }
}
