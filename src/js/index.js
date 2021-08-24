import 'regenerator-runtime/runtime'

import '../scss/style.scss'

import { GameLoop } from './classes/GameLoop'

const canvas = document.createElement('canvas')

const root = document.querySelector('#root')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

root.append(canvas)

const game = new GameLoop({ window, canvas })

game.start()
