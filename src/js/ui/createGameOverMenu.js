export const createGameOverMenu = (canvas, score) => {
  const gameOverMenuCanvas = document.createElement('canvas')
  gameOverMenuCanvas.width = canvas.width
  gameOverMenuCanvas.height = canvas.height

  const gameOverMenuCtx = gameOverMenuCanvas.getContext('2d')

  gameOverMenuCtx.font = '20px sans-serif'

  gameOverMenuCtx.fillText('GAME OVER!', canvas.width / 10, canvas.height * 5 / 12)
  gameOverMenuCtx.fillText(`You lasted ${score} seconds.`, canvas.width / 10, canvas.height * 6 / 12)
  gameOverMenuCtx.fillText('Click anywhere to play again!', canvas.width / 10, canvas.height * 7 / 12)

  return gameOverMenuCanvas
}
