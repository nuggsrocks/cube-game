import { GameLoop } from '../src/js/GameLoop'


describe('GameLoop', () => {
  const mockId = '123abc'

  let mockRequestAnimationFrame = jest.fn()
  let mockCancelAnimationFrame = jest.fn()

  describe('mainLoop()', () => {
    it.each([
      1000,
      2000,
      2016,
      2033
    ])('should set lastTime property to time passed into mainLoop (time: %i)', (time) => {
      const gameLoop = new GameLoop(mockRequestAnimationFrame)

      gameLoop.mainLoop(time)

      expect(gameLoop).toHaveProperty('lastTime', time)
    })
  })

  describe('start()', () => {
    mockRequestAnimationFrame = jest.fn(() => mockId)
    it('should pass main loop function into requestAnimationFrame', () => {
      const gameLoop = new GameLoop(mockRequestAnimationFrame)

      gameLoop.start()

      expect(mockRequestAnimationFrame).toHaveBeenCalledWith(gameLoop.mainLoop)
    })

    it('should set id property to value returned by requestAnimationFrame', () => {
      const gameLoop = new GameLoop(mockRequestAnimationFrame)

      gameLoop.start()

      expect(gameLoop).toHaveProperty('id', mockId)
    })
  })

  describe('stop()', () => {
    it('should pass id property into cancelAnimationFrame', () => {
      const gameLoop = new GameLoop(mockRequestAnimationFrame, mockCancelAnimationFrame)

      gameLoop.id = mockId

      gameLoop.stop()

      expect(mockCancelAnimationFrame).toHaveBeenCalledWith(mockId)
    })
  })

  describe('calcFps()', () => {
    it.each([
      {delta: 1000 / 60, fps: 60},
      {delta: 1000 / 50, fps: 50},
      {delta: 1000 / 30, fps: 30},
      {delta: 1000 / 100, fps: 100}
    ])('should return correct fps for given delta $delta ms', ({delta, fps}) => {
      const gameLoop = new GameLoop()

      expect(Math.round(gameLoop.calcFps(delta))).toEqual(fps)
    })
  })
})
