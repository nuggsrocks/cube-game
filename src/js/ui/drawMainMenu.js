export const drawMainMenu = (canvas) => {
  const ctx = canvas.getContext('2d')

  ctx.font = '20px sans-serif'

  ctx.fillText('MAIN MENU', canvas.width / 10, canvas.height * 4 / 12)
  ctx.fillText('Welcome! Try to avoid the red cubes for as long as possible!',
    canvas.width / 10, canvas.height * 5 / 12)
  ctx.fillText('Use the arrow keys to move.', canvas.width / 10,
    canvas.height * 6 / 12)
  ctx.fillText('Hold space for a speed boost.', canvas.width / 10,
    canvas.height * 7 / 12)
  ctx.fillText('Click anywhere to start!', canvas.width / 10,
    canvas.height * 8 / 12)

  return canvas
}
