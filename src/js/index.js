import 'regenerator-runtime/runtime'

import '../scss/style.scss'

import { GameLoop } from './classes/GameLoop'

const canvas = document.querySelector('canvas')

const root = document.querySelector('main')

canvas.width = root.clientWidth
canvas.height = root.clientHeight

const game = new GameLoop({ window, canvas })

game.start()
