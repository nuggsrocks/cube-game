export const drawMainMenu = (canvas) => {
  const ctx = canvas.getContext('2d')

  ctx.font = '20px sans-serif'

  ctx.fillText('MAIN MENU', canvas.width / 10, canvas.height / 3)
  ctx.fillText('Enter your name:', canvas.width / 10, canvas.height / 2)

  ctx.strokeRect(canvas.width / 10, canvas.height * 2 / 3, canvas.width / 4, 40)

  return canvas
}
