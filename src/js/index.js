import '../scss/style.scss'

import { Rect } from './Rect'
import { GameLoop } from './GameLoop'

const player = new Rect({x: 10, y: 10, size: 10})

const game = new GameLoop(requestAnimationFrame, cancelAnimationFrame, player)

const canvas = document.createElement('canvas')

const root = document.querySelector('#root')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

root.append(canvas)


