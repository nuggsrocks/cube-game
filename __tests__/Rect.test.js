import { Rect } from '../src/js/classes/Rect'
import { describe, it, expect, jest } from '@jest/globals'

describe('Rect', () => {
    describe('move(timeDelta)', () => {
        const mockCanvas = { width: 1000, height: 500 }
        describe(
            'should change x and y values according to given time delta and rect speeds',
            () => {
                it.each([
                    {
                        rect: {
                            x: 0, y: 0, speedX: 1, speedY: 1
                        },
                        timeDelta: 16.66,
                        expected: {
                            x: 16.66 / 10, y: 16.66 / 10
                        }
                    },
                    {
                        rect: {
                            x: 0, y: 33.33 / 10, speedX: 5, speedY: -1
                        },
                        timeDelta: 33.33,
                        expected: {
                            x: 5 * 33.33 / 10, y: 0
                        }
                    },
                    {
                        rect: {
                            x: 200 / 10, y: 0, speedX: -10, speedY: 0.01
                        },
                        timeDelta: 20,
                        expected: {
                            x: 0, y: 0.01 * 20 / 10
                        }
                    }
                ])('Rect.move($timeDelta)', ({ rect, timeDelta, expected }) => {
                    rect = new Rect(rect)

                    rect.move(timeDelta, mockCanvas)

                    expect(rect.x).toBeCloseTo(expected.x, 5)
                    expect(rect.y).toBeCloseTo(expected.y, 5)
                })
            })
    })

    describe('draw(ctx)', () => {
        const mockCtx = {
            fillRect: jest.fn()
        }
        it('should draw rect at current position on given canvas context', () => {
            const rect = new Rect({ x: 100, y: 300, size: 250 })

            rect.draw(mockCtx)

            expect(mockCtx.fillRect).toHaveBeenCalledWith(100, 300, 250, 250)
        })
    })

    describe('detectBorderCollision(canvas)', () => {
        describe('should return empty array if there is no collision', () => {
            it.each([
                { rect: { x: 0, y: 0, size: 10 }, canvas: { width: 100, height: 100 } },
                {
                    rect: { x: 90, y: 90, size: 10 },
                    canvas: { width: 100, height: 100 }
                }
            ])('$rect and $canvas should return false', ({ rect, canvas }) => {
                expect(new Rect(rect).detectBorderCollision(canvas)).toEqual([])
            })
        })

        describe('should return name of border if there is a collision', () => {
            it.each([
                {
                    rect: {
                        x: -0.01, y: 0, size: 10, speedX: -1, speedY: 1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['left']
                },
                {
                    rect: {
                        x: 90.01, y: 0, size: 10, speedX: 1, speedY: 1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['right']
                },
                {
                    rect: {
                        x: 0, y: -0.01, size: 10, speedX: 1, speedY: -1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['top']
                },
                {
                    rect: {
                        x: 0, y: 190.01, size: 10, speedX: 1, speedY: 1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['bottom']
                },
                {
                    rect: {
                        x: -0.01, y: -0.01, size: 10, speedX: -1, speedY: -1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['left', 'top']
                },
                {
                    rect: {
                        x: -0.01, y: 190.01, size: 10, speedX: -1, speedY: 1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['left', 'bottom']
                },
                {
                    rect: {
                        x: 90.01, y: -0.01, size: 10, speedX: 1, speedY: -1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['right', 'top']
                },
                {
                    rect: {
                        x: 90.01, y: 190.01, size: 10, speedX: 1, speedY: 1
                    },
                    canvas: {
                        width: 100, height: 200
                    },
                    expected: ['right', 'bottom']
                }
            ])('case $#', ({ rect, canvas, expected }) => {
                rect = new Rect(rect)

                expect(rect.detectBorderCollision(canvas)).toEqual(expected)
            })
        })
    })

    describe('hasCollidedWithRect(rect)', () => {
        describe('should return false if there is no overlap', () => {
            it.each([
                { rect1: { x: 0, y: 0, size: 10 }, rect2: { x: 10, y: 10, size: 10 } },
                {
                    rect1: { x: 90, y: 90, size: 10 },
                    rect2: { x: 85, y: 80, size: 10 }
                },
                { rect1: { x: 10, y: 0, size: 10 }, rect2: { x: 0, y: 0, size: 10 } },
                { rect1: { x: 0, y: 0, size: 100 }, rect2: { x: 0, y: 101, size: 10 } }
            ])('case $# should return false', ({ rect1, rect2 }) => {
                expect(new Rect(rect1).hasCollidedWithRect(new Rect(rect2)))
                    .toEqual(false)
            })
        })

        describe('should return true if there is overlap', () => {
            it.each([
                {
                    rect1: { x: 0, y: 0, size: 10 },
                    rect2: { x: 9.9, y: 9.9, size: 10 }
                },
                {
                    rect1: { x: 10, y: 0, size: 10 },
                    rect2: { x: 0.1, y: 9.9, size: 10 }
                },
                {
                    rect1: { x: 9.9, y: 9.9, size: 10 },
                    rect2: { x: 0, y: 0, size: 10 }
                },
                {
                    rect1: { x: 0, y: 9.9, size: 10 },
                    rect2: { x: 9.9, y: 0, size: 10 }
                },
                { rect1: { x: 3, y: 0, size: 10 }, rect2: { x: 0, y: 2, size: 6 } },
                {
                    rect1: { x: 9.9, y: 9.9, size: 10 },
                    rect2: { x: 0, y: 0, size: 10 }
                },
                {
                    rect1: { x: 0.1, y: 9.9, size: 10 },
                    rect2: { x: 10, y: 0, size: 10 }
                },
                {
                    rect1: { x: 0, y: 0, size: 10 },
                    rect2: { x: 9.9, y: 9.9, size: 10 }
                },
                {
                    rect1: { x: 9.9, y: 0, size: 10 },
                    rect2: { x: 0, y: 9.9, size: 10 }
                },
                { rect1: { x: 0, y: 2, size: 6 }, rect2: { x: 3, y: 0, size: 10 } }
            ])('case $# should return true', ({ rect1, rect2 }) => {
                expect(new Rect(rect1).hasCollidedWithRect(new Rect(rect2)))
                    .toEqual(true)
            })
        })
    })

    describe('reverseSpeed(axis)', () => {
        it.each([
            {
                rect: { speedX: 1, speedY: 1 },
                axis: 'x',
                expected: { speedX: -1, speedY: 1 }
            },
            {
                rect: { speedX: 1, speedY: 1 },
                axis: 'y',
                expected: { speedX: 1, speedY: -1 }
            }
        ])('should reverse speed along given axis', ({ rect, axis, expected }) => {
            rect = new Rect(rect)

            rect.reverseSpeed(axis)

            expect(rect).toEqual(new Rect(expected))
        })
    })
})
