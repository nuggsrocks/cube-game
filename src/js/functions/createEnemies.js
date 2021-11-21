import { Enemy } from '../classes/Enemy'

export function createEnemies (game) {
  const enemies = []

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }

  for (let i = 0; i < 10; i++) {
    enemies.push(
      new Enemy({
        rect: {
          x: getRandomNumber(game.canvas.width / 2, game.canvas.width - 50),
          y: getRandomNumber(0, game.canvas.height - 50),
          size: getRandomNumber(10, 50),
          speedX: getRandomNumber(-5, 5),
          speedY: getRandomNumber(-5, 5)
        }
      })
    )
  }

  return enemies
}
