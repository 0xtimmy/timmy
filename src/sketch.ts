import p5 from 'p5'

const SKETCH_WIDTH = 720
const SKETCH_HEIGHT = 1200
const SPACING = 12
const NOISE_SCALE = 0.03
const COLORS = ['#65a98f', '#f2ad78', '#5e4017', '#140a0f'] as const

export function mountSketch(host: HTMLElement): p5 {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  return new p5((sketch) => {
    const xPositions: number[] = []
    const yPositions: number[] = []
    const colorIndices: number[] = []

    sketch.setup = () => {
      const canvas = sketch.createCanvas(SKETCH_WIDTH, SKETCH_HEIGHT)
      canvas.parent(host)
      sketch.pixelDensity(1)
      sketch.background('#fbfbfb')
      sketch.strokeWeight(0.5)

      for (let x = 0; x < sketch.width; x += SPACING) {
        for (let y = 0; y < sketch.height; y += SPACING) {
          xPositions.push(x + sketch.random(-SPACING, SPACING))
          yPositions.push(y + sketch.random(-SPACING, SPACING))
          colorIndices.push(Math.floor(sketch.random(COLORS.length)))
        }
      }
    }

    sketch.draw = () => {
      for (let index = 0; index < xPositions.length; index += 1) {
        sketch.stroke(COLORS[colorIndices[index]])

        const x = xPositions[index]
        const y = yPositions[index]
        const xOffset = sketch.noise(x * NOISE_SCALE, y * NOISE_SCALE)
        const yOffset = sketch.noise(
          (x + 1000) * NOISE_SCALE,
          (y + 1000) * NOISE_SCALE,
        )
        const magnitude = sketch.noise(
          (x + 2000) * NOISE_SCALE,
          (y + 2000) * NOISE_SCALE,
        )
        const angle = sketch.tan(yOffset * 6)

        xPositions[index] = x + sketch.cos(angle) * magnitude * 0.6
        yPositions[index] = y + sketch.sin(angle) * magnitude * 0.6

        if (
          (xPositions[index] < 0 || xPositions[index] > sketch.width) &&
          (yPositions[index] < 0 || yPositions[index] > sketch.height)
        ) {
          xPositions[index] = sketch.random(sketch.width)
          yPositions[index] = sketch.random(sketch.height)
        }

        sketch.point(xPositions[index], yPositions[index])
      }

      if (reduceMotion) {
        sketch.noLoop()
      }
    }
  }, host)
}
