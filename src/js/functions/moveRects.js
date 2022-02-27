export const moveRects = (game, delta) => {
    game.player.setSpeed()

    game.player.move(delta, game.canvas)

    for (const enemy of game.enemies) {
        enemy.move(delta, game.canvas)
    }

    game.player.handleBorderCollision(game.canvas)

    for (const enemy of game.enemies) {
        enemy.handleBorderCollision(game.canvas)
    }
}
