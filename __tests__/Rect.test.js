import { Rect } from '../src/js/Rect'

describe('Rect', () => {
  describe('move(deltaX, deltaY)', () => {
    describe('should change x and y values by given delta', () => {
      it.each([
        { deltaX: 10, deltaY: 10, expected: { x: 10, y: 10 } },
        { deltaX: 100, deltaY: -10, expected: { x: 100, y: -10 } },
        { deltaX: -10, deltaY: 100, expected: { x: -10, y: 100 } },
        { deltaX: 10, deltaY: -500, expected: { x: 10, y: -500 } }
      ])('Rect.move($deltaX, $deltaY)', ({ deltaX, deltaY, expected }) => {
        const rect = new Rect()

        rect.move(deltaX, deltaY)

        expect(rect).toHaveProperty('x', expected.x)
        expect(rect).toHaveProperty('y', expected.y)
      })
    })
  })

  describe('hasCollidedWithBorder(canvas)', () => {
    describe('should return false if there is no collision', () => {
      it.each([
        { rect: { x: 0, y: 0, size: 10 }, canvas: { width: 100, height: 100 } },
        { rect: { x: 90, y: 90, size: 10 }, canvas: { width: 100, height: 100 } }
      ])('$rect and $canvas should return false', ({ rect, canvas }) => {
        expect(new Rect(rect).hasCollidedWithBorder(canvas)).toEqual(false)
      })
    })

    describe('should return border(s) that rect has collided with if there is a collision', () => {
      it.each([
        { rect: { x: -10, y: 0, size: 10 }, canvas: { width: 100, height: 100 }, expected: 'left' },
        { rect: { x: 100, y: 0, size: 10 }, canvas: { width: 100, height: 100 }, expected: 'right' },
        { rect: { x: 0, y: -10, size: 10 }, canvas: { width: 100, height: 100 }, expected: 'top' },
        { rect: { x: 0, y: 100, size: 10 }, canvas: { width: 100, height: 100 }, expected: 'bottom' },
        { rect: { x: -10, y: -10, size: 10 }, canvas: { width: 100, height: 100 }, expected: ['left', 'top'] },
        { rect: { x: -10, y: 100, size: 10 }, canvas: { width: 100, height: 100 }, expected: ['left', 'bottom'] },
        { rect: { x: 100, y: -10, size: 10 }, canvas: { width: 100, height: 100 }, expected: ['right', 'top'] },
        { rect: { x: 100, y: 100, size: 10 }, canvas: { width: 100, height: 100 }, expected: ['right', 'bottom'] }
      ])('$rect and $canvas should return $expected', ({ rect, canvas, expected }) => {
        expect(new Rect(rect).hasCollidedWithBorder(canvas)).toEqual(expected)
      })
    })
  })

  describe('hasCollidedWithRect(rect)', () => {
    describe('should return false if there is no overlap', () => {
      it.each([
        { rect1: { x: 0, y: 0, size: 10 }, rect2: { x: 10, y: 10, size: 10 } },
        { rect1: { x: 90, y: 90, size: 10 }, rect2: { x: 85, y: 80, size: 10 } },
        { rect1: { x: 10, y: 0, size: 10 }, rect2: { x: 0, y: 0, size: 10 } },
        { rect1: { x: 0, y: 0, size: 100 }, rect2: { x: 0, y: 101, size: 10 } }
      ])('$rect1 and $rect2 should return false', ({ rect1, rect2 }) => {
        expect(new Rect(rect1).hasCollidedWithRect(new Rect(rect2))).toEqual(false)
      })
    })

    describe('should return true if there is overlap', () => {
      it.each([
        { rect1: { x: 0, y: 0, size: 10 }, rect2: { x: 5, y: 9.9, size: 10 } },
        { rect1: { x: 90, y: 90, size: 10 }, rect2: { x: 95, y: 95, size: 10 } },
        { rect1: { x: 10, y: 0, size: 10 }, rect2: { x: 5, y: 5, size: 10 } },
        { rect1: { x: 0, y: 0, size: 100 }, rect2: { x: 99, y: 99, size: 10 } }
      ])('$rect1 and $rect2 should return true', ({ rect1, rect2 }) => {
        expect(new Rect(rect1).hasCollidedWithRect(new Rect(rect2))).toEqual(true)
      })
    })
  })

  describe('reverseSpeed(...axes)', () => {

    it.each([
      {rect: {speedX: 1, speedY: 1}, axes: ['x'], expected: {speedX: -1, speedY: 1}},
      {rect: {speedX: 1, speedY: 1}, axes: ['y'], expected: {speedX: 1, speedY: -1}},
      {rect: {speedX: 1, speedY: 1}, axes: ['x', 'y'], expected: {speedX: -1, speedY: -1}},
      {rect: {speedX: -1, speedY: -1}, axes: ['x', 'y'], expected: {speedX: 1, speedY: 1}},
      {rect: {speedX: 0, speedY: 0}, axes: ['x', 'y'], expected: {speedX: 0, speedY: 0}}
    ])('should reverse speed along given axes', ({rect, axes, expected}) => {
      rect = new Rect(rect)

      rect.reverseSpeed(...axes)

      expect(rect).toEqual(new Rect(expected))
    })
  })
})
