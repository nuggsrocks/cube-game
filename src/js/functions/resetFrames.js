export const resetFrames = (frames = {}) => {
  frames.count = 0
  frames.delta = 0
  frames.fps = 0

  return frames
}
