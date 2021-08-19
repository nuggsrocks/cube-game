import { Rect } from './Rect'

export class Enemy extends Rect {
  constructor ({ rect }) {
    super(rect)
  }

  draw (ctx) {
    ctx.save()

    ctx.fillStyle = 'red'

    super.draw(ctx)

    ctx.restore()
  }
}
