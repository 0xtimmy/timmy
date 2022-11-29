let x = []
let y = []
let num = 0
const s = 0.03

function setup() {
  createCanvas(720, 1200)
  background('#fbfbfb')
  strokeWeight(0.5)
  for (let i = 0; i < width; i += 12) {
    for (let j = 0; j < height; j += 12) {
      x[num] = i + random() * 24 - 12
      y[num] = j + random() * 24 - 12
      color[num] = floor(random() * 4)
      num++
    }
  }
}

function draw() {
  for (i = 0; i < num; i++) {
    if (color[i] == 0) stroke('#65A98F')
    else if (color[i] == 1) stroke('#F2AD78')
    else if (color[i] == 2) stroke('#5E4017')
    else stroke('#140A0F')
    let xoff = noise(x[i] * s, y[i] * s)
    let yoff = noise((x[i] + 1000) * s, (y[i] + 1000) * s)
    let vmag = noise((x[i] + 2000) * s, (y[i] + 2000) * s)
    let angle = tan(yoff * 6, xoff * 6)
    x[i] = x[i] + cos(angle) * vmag * 2
    y[i] = y[i] + sin(angle) * vmag * 2
    if ((x[i] < 0 || x[i] > width) && (y[i] < 0 || y[i] > height)) {
      x[i] = random() * width
      y[i] = random() * height
    }
    point(x[i], y[i])
  }

  describe(`vertical line moves left to right with updating
    noise values.`)
}
