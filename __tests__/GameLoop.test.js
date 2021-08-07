import { GameLoop } from '../src/js/GameLoop'
import { Rect } from '../src/js/Rect'

describe('GameLoop', () => {
  const mockId = '123abc'

  const mockWindow = {
    requestAnimationFrame: jest.fn(),
    cancelAnimationFrame: jest.fn()
  }

  describe('time(currentTime)', () => {
    it.each([
      { start: 1000, current: 10000, expected: 9000 },
      { start: 16, current: 32, expected: 16 },
      { start: 100, current: 250, expected: 150 },
      { start: 32, current: 100, expected: 68 }
    ])('should return time elapsed from times.start to currentTime', ({ start, current, expected }) => {
      const gameLoop = new GameLoop()

      gameLoop.times.start = start

      expect(gameLoop.time(current)).toEqual(expected)
    })
  })

  describe('mainLoop()', () => {
    it.each([
      1000,
      2000,
      2016,
      2033
    ])('should set times.last property to each time passed into mainLoop (time: %i)', (time) => {
      const gameLoop = new GameLoop({ window: mockWindow })

      gameLoop.mainLoop(time)

      expect(gameLoop).toHaveProperty('times.last', time)
    })

    it('should set times.start property to only first time passed into mainLoop', () => {
      const gameLoop = new GameLoop()

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
    ])('should set times.game property to time returned by time(currentTime)', ({ start, current, expected }) => {
      const gameLoop = new GameLoop()

      gameLoop.times.start = start

      gameLoop.mainLoop(current)

      expect(gameLoop).toHaveProperty('times.game', expected)
    })

    it('should call draw method for player and each enemy in each loop', () => {
      const player = new Rect({ x: 10, y: 10, size: 10 })

      const enemies = [
        new Rect({ x: 200, y: 300, size: 15 }),
        new Rect({ x: 250, y: 325, size: 25 })
      ]

      jest.spyOn(player, 'draw')

      for (const enemy of enemies) {
        jest.spyOn(enemy, 'draw')
      }

      const mockContext = { fillRect: () => {}, clearRect: () => {} }

      const mockCanvas = {
        getContext: () => mockContext
      }

      const gameLoop = new GameLoop({ window: mockWindow, player, enemies, canvas: mockCanvas })

      gameLoop.mainLoop(10)

      expect(player.draw).toHaveBeenCalledWith(mockContext)

      for (const enemy of enemies) {
        expect(enemy.draw).toHaveBeenCalledWith(mockContext)
      }
    })

    it('should call move method for player and each enemy in each loop', () => {
      const player = new Rect({ x: 10, y: 10, size: 10 })

      const enemies = [
        new Rect({ x: 200, y: 300, size: 15 }),
        new Rect({ x: 250, y: 325, size: 25 })
      ]

      jest.spyOn(player, 'move')

      for (const enemy of enemies) {
        jest.spyOn(enemy, 'move')
      }

      const mockContext = { fillRect: () => {}, clearRect: () => {} }

      const mockCanvas = {
        getContext: () => mockContext
      }

      const gameLoop = new GameLoop({ window: mockWindow, player, enemies, canvas: mockCanvas })

      gameLoop.mainLoop(10)

      expect(player.move).toHaveBeenCalled()

      for (const enemy of enemies) {
        expect(enemy.move).toHaveBeenCalled()
      }
    })

    it.each([
      {
        player: { x: 10, y: 10, size: 10 },
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
    ])('should call this.stop() if player has collided with an enemy', ({ player, enemies, called }) => {
      player = new Rect(player)

      enemies = enemies.map(enemy => new Rect(enemy))

      const gameLoop = new GameLoop({ window: mockWindow, player, enemies })

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
    it('should pass main loop function into requestAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow })

      gameLoop.start()

      expect(mockWindow.requestAnimationFrame).toHaveBeenCalledWith(gameLoop.mainLoop)
    })

    it('should set id property to value returned by requestAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow })

      gameLoop.start()

      expect(gameLoop).toHaveProperty('id', mockId)
    })
  })

  describe('stop()', () => {
    it('should pass id property into cancelAnimationFrame', () => {
      const gameLoop = new GameLoop({ window: mockWindow })

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
      const gameLoop = new GameLoop()

      expect(Math.round(gameLoop.calcFps(delta))).toEqual(fps)
    })
  })
})
