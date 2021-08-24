import { GameLoop } from '../src/js/classes/GameLoop'

describe('GameLoop', () => {
  const mockId = '123abc'

  const mockContext = {
    clearRect: jest.fn(),
    fillRect: jest.fn(),
    fillText: jest.fn(),
    save: jest.fn(),
    restore: jest.fn(),
    drawImage: jest.fn(),
    font: null
  }

  const mockCanvas = {
    width: 1000,
    height: 500,
    getContext: () => mockContext
  }

  document.createElement = jest.fn(() => mockCanvas)

  const mockRect = {
    move: jest.fn(),
    draw: jest.fn(),
    hasCollidedWithRect: jest.fn(),
    handleBorderCollision: jest.fn()
  }

  const mockWindow = {
    requestAnimationFrame: jest.fn(),
    cancelAnimationFrame: jest.fn()
  }

  describe('mainLoop()', () => {
    it.each([
      1000,
      2000,
      2016,
      2033
    ])('should set times.last property to each time passed into mainLoop (time: %i)', (time) => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas
      })

      gameLoop.gameState = 'RUNNING'

      gameLoop.mainLoop(time)

      expect(gameLoop).toHaveProperty('times.last', time)
    })

    it('should set times.start property to only first time passed into mainLoop', () => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas
      })

      gameLoop.gameState = 'RUNNING'

      const times = [10, 20, 30, 40, 50, 60, 70]

      for (const time of times) {
        gameLoop.mainLoop(time)
      }

      expect(gameLoop).toHaveProperty('times.start', times[0])
    })

    it.each([
      { start: 1000, current: 2000, expected: 1000 },
      { start: 100, current: 2000, expected: 1900 },
      { start: 16, current: 20032, expected: 20016 }
    ])('should set times.game property with each loop', ({ start, current, expected }) => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas
      })

      gameLoop.gameState = 'RUNNING'

      gameLoop.times.start = start

      gameLoop.mainLoop(current)

      expect(gameLoop).toHaveProperty('times.game', expected)
    })

    it('should call draw method for player and each enemy in each loop', () => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas
      })

      gameLoop.gameState = 'RUNNING'

      gameLoop.player.draw = jest.fn()

      for (const enemy of gameLoop.enemies) {
        enemy.draw = jest.fn()
      }

      gameLoop.mainLoop(10)

      expect(gameLoop.player.draw).toHaveBeenCalledWith(mockContext)

      for (const enemy of gameLoop.enemies) {
        expect(enemy.draw).toHaveBeenCalledWith(mockContext)
      }
    })

    it('should call move method for player and each enemy in each loop', () => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas
      })

      gameLoop.gameState = 'RUNNING'

      gameLoop.player.move = jest.fn()

      for (const enemy of gameLoop.enemies) {
        enemy.move = jest.fn()
      }

      gameLoop.mainLoop(0)

      expect(gameLoop.player.move).toHaveBeenCalledWith(0, mockCanvas)

      for (const enemy of gameLoop.enemies) {
        expect(enemy.move).toHaveBeenCalledWith(0, mockCanvas)
      }
    })

    it('should set gameState to OVER if player has collided with one of enemies', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.player.hasCollidedWithRect = jest.fn(() => true)

      gameLoop.gameState = 'RUNNING'

      gameLoop.mainLoop()

      expect(gameLoop.gameState).toEqual('OVER')
    })
  })

  describe('start()', () => {
    mockWindow.requestAnimationFrame = jest.fn(() => mockId)

    it('should pass main loop function into requestAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.start()

      expect(mockWindow.requestAnimationFrame).toHaveBeenCalledWith(gameLoop.mainLoop)
    })

    it('should set id property to value returned by requestAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.start()

      expect(gameLoop).toHaveProperty('id', mockId)
    })
  })

  describe('calcFps(delta, frameCount)', () => {
    it.each([
      { delta: 1000 / 60, frameCount: 1, fps: 60 },
      { delta: 1600 / 3, frameCount: 16, fps: 30 },
      { delta: 25000 / 60, frameCount: 25, fps: 60 },
      { delta: 500, frameCount: 30, fps: 60 }
    ])('should return correct fps for given delta: calcFps($delta, $frameCount) should return $fps', ({ delta, frameCount, fps }) => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      expect(Math.round(gameLoop.calcFps(delta, frameCount))).toEqual(fps)
    })
  })
})
