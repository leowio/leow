---
title: "Generative Motion"
pubDatetime: 2022-10-04
description: "ATOMS!"
author: Leo Wang
featured: false
draft: false
tags:
  - archive
  - university
  - cc-lab
---

### Check out my work [here](https://editor.p5js.org/ImPrankster/sketches/5x578DiXM)

Everytime it will have a different background, font color, atom counts & atom movements!

Check out the siccck GIFs!

![GIF with multiple small circles circling around a big circle](https://imprankster.vercel.app/images/generative-motion/1439edeb-0074-864d-26ba-74c15fa0b145.gif)
![GIF with multiple small circles circling around a big circle](https://imprankster.vercel.app/images/generative-motion/afa59d91-91b6-5ba6-20ad-9d34a439b448.gif)
![GIF with multiple small circles circling around a big circle](https://imprankster.vercel.app/images/generative-motion/d5293a58-6ecc-201d-bb7c-35667934b05f.gif)

```jsx
let ang = 0;
let randomArr = [];
let randomHue = 0;

let atom = (r1, r2) => {
  circle(
    map(sin(ang + r1), -1, 1, 50, width - 50),
    map(cos(ang + r2), -1, 1, 50, height - 50),
    20
  );
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  for (let i = 0; i < random(10, 25); i++) {
    tArr = [];
    for (let i = 0; i < 2; i++) {
      tArr.push(random(10, 50));
    }
    randomArr.push(tArr);
  }
  randomHue = random(200, 255);
}

function draw() {
  background(randomHue, 65, 65);
  fill(255 - randomHue, 78, 78);
  textSize(133);
  textStyle(BOLDITALIC);
  text("atoms", 0, 125 - sin(ang * 0.5) * 10);
  noStroke();
  fill(255);
  circle(width / 2, height / 2, map(sin(ang * 0.5), -1, 1, 100, 125));
  randomArr.forEach(a => {
    atom(a[0], a[1]);
  });
  ang += 0.05;
}
```
