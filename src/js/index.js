import '../scss/style.scss'

import { Rect } from './classes/Rect'
import { GameLoop } from './classes/GameLoop'

const canvas = document.createElement('canvas')

const root = document.querySelector('#root')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

root.append(canvas)

const player = new Rect({ x: 10, y: 10, size: 10 })

const getRandomNumber = (min, max) => {
  return Math.random() * max + min
}

const enemies = []

let i = 0

while (i < 10) {
  enemies.push(
    new Rect({
      x: getRandomNumber(canvas.width / 2, canvas.width - 50),
      y: getRandomNumber(0, canvas.height - 50),
      size: getRandomNumber(10, 50),
      speedX: getRandomNumber(-5, 5),
      speedY: getRandomNumber(-5, 5)
    })
  )
  i++
}

const game = new GameLoop({ window, player, enemies, canvas })

game.start()
