export const drawFrame = (game, ctx) => {
  ctx.save()

  ctx.font = '16px sans-serif'

  ctx.fillText('Time: ' + (game.times.game / 1000).toFixed(2) + ' s',
    game.canvas.width * 11 / 12, game.canvas.height / 20)

  ctx.restore()

  game.player.draw(ctx)

  for (const enemy of game.enemies) {
    enemy.draw(ctx)
  }
}
