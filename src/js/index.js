import 'regenerator-runtime/runtime'

import '../scss/style.scss'

import { Player } from './classes/Player'
import { createEnemies } from './functions/createEnemies'
import { calcFps } from './functions/calcFps'

const canvas = document.querySelector('canvas')

const root = document.querySelector('main')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

const mainMenu = document.querySelector('#main-menu')
const gameOverMenu = document.querySelector('#game-over-menu')

mainMenu.querySelector('button').onclick = (event) => {
  localStorage.setItem('name', mainMenu.querySelector('input').value)
  mainMenu.style.setProperty('display', 'none')
  canvas.style.setProperty('display', 'block')
  game.id = window.requestAnimationFrame(game.mainLoop)
}

const initialTimes = () => ({
  start: null,
  last: null,
  game: 0
})

const initialFrames = () => ({
  count: 0,
  delta: 0,
  fps: 0
})

const game = {
  canvas,
  times: initialTimes(),
  frames: initialFrames(),
  player: new Player({ window: window, rect: { x: 10, y: 10, size: 20 } }),
  mainLoop: (currentTime) => {
    const ctx = game.canvas.getContext('2d')

    ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)

    if (game.times.start === null) {
      game.times.start = currentTime
    }

    if (game.times.last === null) {
      game.times.last = currentTime
    }

    game.times.game = currentTime - game.times.start

    for (const enemy of game.enemies) {
      if (game.player.hasCollidedWithRect(enemy)) {
        window.cancelAnimationFrame(game.id)
        return game.end()
      }
    }

    const delta = currentTime - game.times.last

    game.player.setSpeed()

    game.player.move(delta, game.canvas)

    for (const enemy of game.enemies) {
      enemy.move(delta, game.canvas)
    }

    game.player.handleBorderCollision(game.canvas)

    for (const enemy of game.enemies) {
      enemy.handleBorderCollision(game.canvas)
    }

    game.frames.count++
    game.frames.delta += delta

    if (game.frames.delta > 500) {
      game.frames.fps = calcFps(game.frames.delta, game.frames.count)
      game.frames.count = 0
      game.frames.delta = 0
    }

    ctx.save()

    ctx.font = '16px sans-serif'

    ctx.fillText('Time: ' + (game.times.game / 1000).toFixed(2) + ' s',
      game.canvas.width * 11 / 12, game.canvas.height / 20)

    ctx.restore()

    game.player.draw(ctx)

    for (const enemy of game.enemies) {
      enemy.draw(ctx)
    }

    game.times.last = currentTime

    game.id = window.requestAnimationFrame(game.mainLoop)
  },
  end: () => {
    canvas.style.setProperty('display', 'none')

    const score = Math.round(game.times.game) / 1000

    gameOverMenu.querySelector('#score').textContent = score

    gameOverMenu.querySelector('button').onclick = () => {
      gameOverMenu.style.setProperty('display', 'none')
      canvas.style.setProperty('display', 'block')

      game.times = initialTimes()
      game.frames = initialFrames()

      console.log(game.times, initialTimes())

      game.player = new Player({ window: window, rect: { x: 10, y: 10, size: 20 } })

      game.enemies = createEnemies(game)
      game.id = window.requestAnimationFrame(game.mainLoop)
    }

    gameOverMenu.style.setProperty('display', 'block')

    fetch('/db/insert?' + new URLSearchParams({
      name: localStorage.name,
      score
    }), {
      method: 'POST'
    }).then(() => console.log('Inserted db entry!'))
    .catch(err => console.error(err))
  }
}

game.enemies = createEnemies(game)
