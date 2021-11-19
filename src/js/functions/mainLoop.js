import { gameStates } from '../gameStates'
import { drawGameOverMenu } from '../ui/drawGameOverMenu'
import { drawMainMenu } from '../ui/drawMainMenu'

export function mainLoop (game, currentTime) {
  const ctx = game.canvas.getContext('2d')

  ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)

  if (game.gameState === gameStates.MENU) {
    drawMainMenu(game.canvas)
    game.canvas.onclick = (event) => {
      game.reset()
      game.gameState = gameStates.RUNNING
      game.canvas.onclick = null
    }
  }

  if (game.gameState === gameStates.OVER) {
    const score = Math.round(game.times.game) / 1000

    drawGameOverMenu(game.canvas, score)

    game.canvas.onclick = (event) => {
      game.reset()
      game.gameState = gameStates.RUNNING
      game.canvas.onclick = null
    }
  }

  if (game.gameState === gameStates.RUNNING) {
    if (game.times.start === null) {
      game.times.start = currentTime
    }

    if (game.times.last === null) {
      game.times.last = currentTime
    }

    game.times.game = currentTime - game.times.start

    for (const enemy of game.enemies) {
      if (game.player.hasCollidedWithRect(enemy)) {
        game.gameState = gameStates.OVER
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
      game.frames.fps = game.calcFps(game.frames.delta, game.frames.count)
      game.frames.count = 0
      game.frames.delta = 0
    }

    game.ctx.save()

    game.ctx.font = '16px sans-serif'

    game.ctx.fillText('Time: ' + (game.times.game / 1000).toFixed(2) + ' s',
      game.canvas.width * 11 / 12, game.canvas.height / 20)

    game.ctx.restore()

    game.player.draw(game.ctx)

    for (const enemy of game.enemies) {
      enemy.draw(game.ctx)
    }

    game.times.last = currentTime
  }

}
