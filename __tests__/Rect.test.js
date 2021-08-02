import { Rect } from '../src/js/Rect'

describe('Rect', () => {
  describe('move(deltaX, deltaY)', () => {
    describe('should change x and y values by given delta', () => {
      it.each([
        {deltaX: 10, deltaY: 10, expected: {x: 10, y: 10}},
        {deltaX: 100, deltaY: -10, expected: {x: 100, y: -10}},
        {deltaX: -10, deltaY: 100, expected: {x: -10, y: 100}},
        {deltaX: 10, deltaY: -500, expected: {x: 10, y: -500}}
      ])('Rect.move($deltaX, $deltaY)', ({deltaX, deltaY, expected}) => {
        const rect = new Rect()

        rect.move(deltaX, deltaY)

        expect(rect).toHaveProperty('x', expected.x)
        expect(rect).toHaveProperty('y', expected.y)
      })
    })
  })
})
