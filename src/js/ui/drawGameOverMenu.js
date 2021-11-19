export const drawGameOverMenu = (canvas, score) => {
  const ctx = canvas.getContext('2d')

  ctx.font = '20px sans-serif'

  ctx.fillText('GAME OVER!', canvas.width / 10, canvas.height * 5 / 12)
  ctx.fillText(`You lasted ${score} seconds.`, canvas.width / 10,
    canvas.height * 6 / 12)
  ctx.fillText('Click anywhere to play again!', canvas.width / 10,
    canvas.height * 7 / 12)

  return canvas
}
