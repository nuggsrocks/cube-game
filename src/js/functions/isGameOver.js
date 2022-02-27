export const isGameOver = (game) => {
    for (const enemy of game.enemies) {
        if (game.player.hasCollidedWithRect(enemy)) {
            return true
        }
    }
    return false
}
