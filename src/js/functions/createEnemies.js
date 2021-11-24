import { Enemy } from '../classes/Enemy'
import { difficulties } from '../constants'

export function createEnemies (game) {
  const enemies = []

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }

  console.log(game.difficulty)
  const { minSpeed, maxSpeed } = difficulties[game.difficulty]

  for (let i = 0; i < 10; i++) {
    enemies.push(
      new Enemy({
        rect: {
          x: getRandomNumber(game.canvas.width / 2, game.canvas.width - 50),
          y: getRandomNumber(0, game.canvas.height - 50),
          size: getRandomNumber(10, 50),
          speedX: getRandomNumber(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
          speedY: getRandomNumber(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1)
        }
      })
    )
  }

  return enemies
}
