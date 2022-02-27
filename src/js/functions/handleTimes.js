export const handleTimes = (game, currentTime) => {
    if (game.times.start === null) {
        game.times.start = currentTime
    }

    if (game.times.last === null) {
        game.times.last = currentTime
    }

    game.times.game = currentTime - game.times.start
}
