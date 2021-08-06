import '../scss/style.scss'

import { Rect } from './Rect'
import { GameLoop } from './GameLoop'

const player = new Rect({ x: 10, y: 10, size: 10 })

const enemies = [
  new Rect({ x: 200, y: 10, size: 20, speedX: 1, speedY: -1 })
]

const game = new GameLoop(window, player, enemies)

const canvas = document.createElement('canvas')

const root = document.querySelector('#root')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

root.append(canvas)

game.start()

setTimeout(() => game.stop(), 1000)
