import { Rect } from './Rect'

export class Enemy extends Rect {
    constructor ({ rect }) {
        super(rect)
    }

    handleBorderCollision (canvas) {
        const collisions = super.detectBorderCollision(canvas)

        if (collisions.includes('left')) {
            this.reverseSpeed('x')
            this.x = 0
        }

        if (collisions.includes('right')) {
            this.reverseSpeed('x')
            this.x = canvas.width - this.size
        }

        if (collisions.includes('top')) {
            this.reverseSpeed('y')
            this.y = 0
        }

        if (collisions.includes('bottom')) {
            this.reverseSpeed('y')
            this.y = canvas.height - this.size
        }
    }

    draw (ctx) {
        ctx.save()

        ctx.fillStyle = 'red'

        super.draw(ctx)

        ctx.restore()
    }
}
