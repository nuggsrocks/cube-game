import { GameLoop } from '../src/js/classes/GameLoop'
import { Rect } from '../src/js/classes/Rect'
import gameStates from '../src/js/constants/gameStates'

describe('GameLoop', () => {
  const mockId = '123abc'

  const mockContext = {
    clearRect: jest.fn(),
    fillRect: jest.fn()
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

  describe('onKeyDown()', () => {
    it.each([
      { code: 'ArrowUp' },
      { code: 'ArrowRight' },
      { code: 'ArrowDown' },
      { code: 'ArrowLeft' }
    ])('should modify input state of given key to true', ({ code }) => {
      const mockEvent = {code}

      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

      gameLoop.onKeyDown(mockEvent)

      expect(gameLoop.inputStates[code]).toEqual(true)
    })
    it.each([
      { code: 'KeyD' },
      { code: 'KeyE' }
    ])('should not add other keys to inputStates object', ({code}) => {
      const mockEvent = {code}

      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

      gameLoop.onKeyDown(mockEvent)

      expect(gameLoop.inputStates).not.toHaveProperty(code)
    })
  })

  describe('onKeyUp()', () => {
    it.each([
      { code: 'ArrowUp' },
      { code: 'ArrowRight' },
      { code: 'ArrowDown' },
      { code: 'ArrowLeft' }
    ])('should modify input state of given key to false', ({ code }) => {
      const mockEvent = {code}

      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

      gameLoop.inputStates[code] = true

      gameLoop.onKeyUp(mockEvent)

      expect(gameLoop.inputStates[code]).toEqual(false)
    })
    it.each([
      { code: 'KeyD' },
      { code: 'KeyE' }
    ])('should not add other keys to inputStates object', ({code}) => {
      const mockEvent = {code}

      const gameLoop = new GameLoop({
        window: mockWindow, canvas: mockCanvas, enemies: [mockRect, mockRect], player: mockRect
      })

      gameLoop.onKeyUp(mockEvent)

      expect(gameLoop.inputStates).not.toHaveProperty(code)
    })
  })

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

    it.each([
      {
        player: { x: 5.01, y: 5.01, size: 10 },
        enemies: [
          { x: 15, y: 15, size: 10 },
          { x: 25, y: 25, size: 10 },
          { x: 35, y: 35, size: 10 }
        ],
        called: true
      },
      {
        player: { x: 10, y: 10, size: 10 },
        enemies: [
          { x: 25, y: 25, size: 10 },
          { x: 0, y: 0, size: 10 },
          { x: 35, y: 35, size: 10 }
        ],
        called: false
      },
      {
        player: { x: 10, y: 10, size: 10 },
        enemies: [
          { x: 5, y: 5, size: 10 },
          { x: 15, y: 15, size: 10 },
          { x: 35, y: 35, size: 10 }
        ],
        called: true
      },
      {
        player: { x: 0, y: 0, size: 10 },
        enemies: [
          { x: 0, y: 10, size: 10 },
          { x: 10, y: 0, size: 10 },
          { x: 0, y: 0, size: 0 }
        ],
        called: false
      }
    ])('should call this.stop() if player has collided with one of enemies (case $#)', ({ player, enemies, called }) => {
      player = new Rect(player)

      enemies = enemies.map(enemy => new Rect(enemy))

      const gameLoop = new GameLoop({ window: mockWindow, player, enemies, canvas: mockCanvas })

      jest.spyOn(gameLoop, 'stop')

      gameLoop.mainLoop()

      if (called === true) {
        expect(gameLoop.stop).toHaveBeenCalled()
      } else {
        expect(gameLoop.stop).not.toHaveBeenCalled()
      }
    })
  })

  describe('start()', () => {
    mockWindow.requestAnimationFrame = jest.fn(() => mockId)
    it('should set gameState property to gameStates.RUNNING', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.start()

      expect(gameLoop.gameState).toEqual(gameStates.RUNNING)
    })

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
    it('should set gameState property to gameStates.OVER', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.stop()

      expect(gameLoop.gameState).toEqual(gameStates.OVER)
    })
    it('should pass id property into cancelAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      gameLoop.id = mockId

      gameLoop.stop()

      expect(mockWindow.cancelAnimationFrame).toHaveBeenCalledWith(mockId)
    })
  })

  describe('calcFps(delta)', () => {
    it.each([
      { delta: 1000 / 60, fps: 60 },
      { delta: 1000 / 50, fps: 50 },
      { delta: 1000 / 30, fps: 30 },
      { delta: 1000 / 100, fps: 100 }
    ])('should return correct fps for given delta: calcFps($delta)', ({ delta, fps }) => {
      const gameLoop = new GameLoop({ window: mockWindow, canvas: mockCanvas })

      expect(Math.round(gameLoop.calcFps(delta))).toEqual(fps)
    })
  })
})
