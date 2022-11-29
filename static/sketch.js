let x = []
let y = []
let num = 0
const s = 0.03

function setup() {
  createCanvas(357, 600)
  background('#fbfbfb')
  strokeWeight(0.5)
  for (let i = 0; i < 357; i += 18) {
    for (let j = 0; j < 600; j += 18) {
      x[num] = i + random() * 24 - 12
      y[num] = j + random() * 24 - 12
      color[num] = floor(random() * 3)
      num++
    }
  }
}

function draw() {
  for (i = 0; i < num; i++) {
    if (color[i] == 0) stroke('#ff0000')
    else if (color[i] == 1) stroke('#0000ff')
    else stroke('#000000')
    let xoff = noise(x[i] * s, y[i] * s)
    let yoff = noise((x[i] + 1000) * s, (y[i] + 1000) * s)
    let vmag = noise((x[i] + 2000) * s, (y[i] + 2000) * s)
    let angle = tan(yoff * 6, xoff * 6)
    x[i] = x[i] + cos(angle) * vmag * 0.02
    y[i] = y[i] + sin(angle) * vmag * 0.02
    if ((x[i] < 0 || x[i] > width) && (y[i] < 0 || y[i] > height)) {
      x[num] = random() * width
      y[num] = random() * height
    }
    point(x[i], y[i])
  }

  describe(`vertical line moves left to right with updating
    noise values.`)
}
