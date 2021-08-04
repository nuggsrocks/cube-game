import { GameLoop } from '../src/js/GameLoop'

describe('GameLoop', () => {
  const mockId = '123abc'

  let mockRequestAnimationFrame = jest.fn()
  const mockCancelAnimationFrame = jest.fn()

  describe('time(currentTime)', () => {
    it.each([
      { start: 1000, current: 2000, expected: 1000 },
      { start: 16, current: 32, expected: 16 },
      { start: 100, current: 250, expected: 150 },
      { start: 32, current: 100, expected: 68 }
    ])('should return time elapsed from startTime to currentTime', ({ start, current, expected }) => {
      const gameLoop = new GameLoop()

      gameLoop.startTime = start

      expect(gameLoop.time(current)).toEqual(expected)
    })
  })

  describe('mainLoop()', () => {
    it.each([
      1000,
      2000,
      2016,
      2033
    ])('should set lastTime property to each time passed into mainLoop (time: %i)', (time) => {
      const gameLoop = new GameLoop(mockRequestAnimationFrame)

      gameLoop.mainLoop(time)

      expect(gameLoop).toHaveProperty('lastTime', time)
    })

    it('should set startTime property to only first time passed into mainLoop', () => {
      const gameLoop = new GameLoop()

      const times = [10, 20, 30, 40, 50, 60, 70]

      for (const time of times) {
        gameLoop.mainLoop(time)
      }

      expect(gameLoop).toHaveProperty('startTime', times[0])
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

  describe('calcFps(delta)', () => {
    it.each([
      { delta: 1000 / 60, fps: 60 },
      { delta: 1000 / 50, fps: 50 },
      { delta: 1000 / 30, fps: 30 },
      { delta: 1000 / 100, fps: 100 }
    ])('should return correct fps for given delta $delta ms', ({ delta, fps }) => {
      const gameLoop = new GameLoop()

      expect(Math.round(gameLoop.calcFps(delta))).toEqual(fps)
    })
  })
})
