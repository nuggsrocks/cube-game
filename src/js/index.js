import 'regenerator-runtime/runtime'

import '../scss/style.scss'

import { GameLoop } from './classes/GameLoop'
import { Player } from './classes/Player'
import {Enemy} from './classes/Enemy'

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

const canvas = document.createElement('canvas')

const root = document.querySelector('#root')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

const createGame = () => {
  const player = new Player({ window: window, rect: { x: 10, y: 10, size: 20 } })

  const enemies = []

  let i = 0

  while (i < 10) {
    enemies.push(
      new Enemy({
        rect: {
          x: getRandomNumber(canvas.width / 2, canvas.width - 50),
          y: getRandomNumber(0, canvas.height - 50),
          size: getRandomNumber(10, 50),
          speedX: getRandomNumber(-5, 5),
          speedY: getRandomNumber(-5, 5)
        }
      })
    )
    i++
  }

  return new GameLoop({ window, player, enemies, canvas })
}

root.append(canvas)

createGame().start()
