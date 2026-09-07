import p5 from 'p5'

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

    const hostSize = () => {
      const bounds = host.getBoundingClientRect()

      return {
        width: Math.max(1, Math.round(bounds.width || window.innerWidth)),
        height: Math.max(1, Math.round(bounds.height || window.innerHeight)),
      }
    }

    const seedParticles = () => {
      xPositions.length = 0
      yPositions.length = 0
      colorIndices.length = 0

      for (let x = 0; x < sketch.width; x += SPACING) {
        for (let y = 0; y < sketch.height; y += SPACING) {
          xPositions.push(x + sketch.random(-SPACING, SPACING))
          yPositions.push(y + sketch.random(-SPACING, SPACING))
          colorIndices.push(Math.floor(sketch.random(COLORS.length)))
        }
      }
    }

    const resizeToHost = () => {
      const { width, height } = hostSize()
      sketch.resizeCanvas(width, height)
      sketch.background('#fbfbfb')
      seedParticles()
    }

    sketch.setup = () => {
      const { width, height } = hostSize()
      sketch.pixelDensity(Math.min(window.devicePixelRatio, 2))
      const canvas = sketch.createCanvas(width, height)
      canvas.parent(host)
      sketch.background('#fbfbfb')
      sketch.strokeWeight(0.5)
      seedParticles()
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

    sketch.windowResized = () => {
      resizeToHost()

      if (reduceMotion) {
        sketch.redraw()
      }
    }
  }, host)
}
