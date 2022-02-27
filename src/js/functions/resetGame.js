import { Player } from '../classes/Player'
import { createEnemies } from './createEnemies'
import { resetTimes } from './resetTimes'
import { resetFrames } from './resetFrames'

export const resetGame = (game) => {
    resetTimes(game.times)
    resetFrames(game.frames)

    game.player = new Player({ window: window, rect: { x: 10, y: 10, size: 20 } })

    game.enemies = createEnemies(game)
}
