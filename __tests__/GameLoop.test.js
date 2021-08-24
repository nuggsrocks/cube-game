import { GameLoop } from '../src/js/classes/GameLoop'

describe('GameLoop', () => {
  const mockId = '123abc'

  const mockContext = {
    clearRect: jest.fn(),
    fillRect: jest.fn(),
    fillText: jest.fn(),
    save: jest.fn(),
    restore: jest.fn()
  }

  const mockCanvas = {
    width: 1000,
    height: 500,
    getContext: () => mockContext
  }

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
        window: mockWindow, player: mockRect, enemies: [mockRect, mockRect], canvas: mockCanvas
      })

      gameLoop.mainLoop(time)

      expect(gameLoop).toHaveProperty('times.last', time)
    })

    it('should set times.start property to only first time passed into mainLoop', () => {
      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

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
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

      gameLoop.times.start = start

      gameLoop.mainLoop(current)

      expect(gameLoop).toHaveProperty('times.game', expected)
    })

    it('should call draw method for player and each enemy in each loop', () => {
      const enemies = [
        mockRect,
        mockRect
      ]

      const gameLoop = new GameLoop({
        window: mockWindow, player: mockRect, enemies, canvas: mockCanvas
      })

      gameLoop.mainLoop(10)

      expect(mockRect.draw).toHaveBeenCalledWith(mockContext)

      for (const enemy of enemies) {
        expect(enemy.draw).toHaveBeenCalledWith(mockContext)
      }
    })

    it('should call move method for player and each enemy in each loop', () => {
      const player = mockRect

      const enemies = [
        mockRect,
        mockRect
      ]

      const gameLoop = new GameLoop({
        window: mockWindow, player, enemies, canvas: mockCanvas
      })

      gameLoop.mainLoop()

      expect(player.move).toHaveBeenCalledWith(0, mockCanvas)

      for (const enemy of enemies) {
        expect(enemy.move).toHaveBeenCalledWith(0, mockCanvas)
      }
    })

    it('should call this.stop() if player has collided with one of enemies (case $#)', () => {
      const player = mockRect

      player.hasCollidedWithRect.mockImplementation(() => true)

      const enemies = [mockRect, mockRect]

      const gameLoop = new GameLoop({ window: mockWindow, player, enemies, canvas: mockCanvas })

      jest.spyOn(gameLoop, 'stop')

      gameLoop.mainLoop()

      expect(gameLoop.stop).toHaveBeenCalled()
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

  describe('stop()', () => {
    it('should pass id property into cancelAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.id = mockId

      gameLoop.stop()

      expect(mockWindow.cancelAnimationFrame).toHaveBeenCalledWith(mockId)
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
