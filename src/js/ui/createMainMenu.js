export const createMainMenu = (canvas) => {
  const mainMenuCanvas = document.createElement('canvas')
  mainMenuCanvas.width = canvas.width
  mainMenuCanvas.height = canvas.height

  const mainMenuCtx = mainMenuCanvas.getContext('2d')

  mainMenuCtx.font = '20px sans-serif'

  mainMenuCtx.fillText('MAIN MENU', canvas.width / 10, canvas.height * 4 / 12)
  mainMenuCtx.fillText('Welcome! Try to avoid the red cubes for as long as possible!', canvas.width / 10, canvas.height * 5 / 12)
  mainMenuCtx.fillText('Use the arrow keys to move.', canvas.width / 10, canvas.height * 6 / 12)
  mainMenuCtx.fillText('Hold space for a speed boost.', canvas.width / 10, canvas.height * 7 / 12)
  mainMenuCtx.fillText('Click anywhere to start!', canvas.width / 10, canvas.height * 8 / 12)

  return mainMenuCanvas
}
