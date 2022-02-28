import { Player } from '../Player'
import { describe, it, expect, jest } from '@jest/globals'

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

    describe.each([
        { func_to_test: 'onKeyDown', expected: true },
        { func_to_test: 'onKeyUp', expected: false }
    ])('%s()', ({func_to_test, expected}) => {
        it.each([
            { code: 'ArrowUp' },
            { code: 'ArrowRight' },
            { code: 'ArrowDown' },
            { code: 'ArrowLeft' }
        ])('should modify input state of given key to true - test $code', ({ code }) => {
            const mockEvent = { code }

            const player = new Player({
                window: mockWindow, rect: mockRect
            })
            
            player[func_to_test](mockEvent)

            expect(player.inputStates[code]).toEqual(expected)
        })
        it.each([
            { code: 'KeyD' },
            { code: 'KeyE' },
            { code: 'KeyA' },
            { code: 'Shift' }
        ])('should not add extraneous keys to inputStates object - test $code', ({ code }) => {
            const mockEvent = { code }

            const player = new Player({
                window: mockWindow, rect: mockRect
            })

            player.onKeyDown(mockEvent)

            expect(player.inputStates).not.toHaveProperty(code)
        })
    })
})
