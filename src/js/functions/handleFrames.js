import { calcFps } from './calcFps'

export const handleFrames = (game, delta) => {
  game.frames.count++
  game.frames.delta += delta

  if (game.frames.delta > 500) {
    game.frames.fps = calcFps(game.frames.delta, game.frames.count)
    game.frames.count = 0
    game.frames.delta = 0
  }
}
