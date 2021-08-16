import { Player } from '../src/js/classes/Player'

describe('Player', () => {
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
      const mockEvent = { code }

      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      player.onKeyDown(mockEvent)

      expect(player.inputStates[code]).toEqual(true)
    })
    it.each([
      { code: 'KeyD' },
      { code: 'KeyE' }
    ])('should not add other keys to inputStates object', ({ code }) => {
      const mockEvent = { code }

      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      player.onKeyDown(mockEvent)

      expect(player.inputStates).not.toHaveProperty(code)
    })
    it('should call setSpeed method', () => {
      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      jest.spyOn(player, 'setSpeed')

      player.onKeyDown({ code: 'KeyX' })

      expect(player.setSpeed).toHaveBeenCalled()
    })
  })

  describe('onKeyUp()', () => {
    it.each([
      { code: 'ArrowUp' },
      { code: 'ArrowRight' },
      { code: 'ArrowDown' },
      { code: 'ArrowLeft' }
    ])('should modify input state of given key to false', ({ code }) => {
      const mockEvent = { code }

      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      player.inputStates[code] = true

      player.onKeyUp(mockEvent)

      expect(player.inputStates[code]).toEqual(false)
    })
    it.each([
      { code: 'KeyD' },
      { code: 'KeyE' }
    ])('should not add other keys to inputStates object', ({ code }) => {
      const mockEvent = { code }

      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      player.onKeyUp(mockEvent)

      expect(player.inputStates).not.toHaveProperty(code)
    })
    it('should call setSpeed method', () => {
      const player = new Player({
        window: mockWindow, rect: mockRect
      })

      jest.spyOn(player, 'setSpeed')

      player.onKeyDown({ code: 'KeyX' })

      expect(player.setSpeed).toHaveBeenCalled()
    })
  })
})
