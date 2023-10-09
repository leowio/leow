---
title: "Rainbow Hearts"
pubDatetime: 2022-09-19
description: "Rainbowy colored hearts."
author: Leo Wang
featured: false
draft: false
tags:
  - archive
  - university
  - cc-lab
ogImage: ""
---

### Check out my work [here](https://editor.p5js.org/ImPrankster/full/ctwhPZYf-)

This is kinda like the idea I described in the _On Conditional Design._ Its basically just a constantly growing stripe of rainbow-colored hearts. And looking at stripe constantly growing is very pleasing.

Under here is my code, I used lambda expression to create new functions to make it as neat as possible. [View the screenshot here.](https://drive.google.com/file/d/1P2hOm_zLeNMxlhqJycMSuXfQGspJDrW_/view?usp=sharing)

```jsx
let currentX = 100;
let currentY = 100;
let currentHue = 0;
let hueAdding = true;
let directions = ["up", "down", "left", "right"];

let heartShape = (x, y, size) => {
  //From the p5.js example
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
};

let setNewLocation = () => {
  if (currentX <= 50 || currentX >= 350 || currentY <= 50 || currentY >= 350) {
    if (currentX <= 50) {
      currentX += 10;
    }
    if (currentX >= 350) {
      currentX -= 10;
    }
    if (currentY <= 50) {
      currentY += 10;
    }
    if (currentY >= 350) {
      currentY -= 10;
    }
    return;
  }
  //If the shape is almost outside the canvas, move it inside.

  switch (random(directions)) {
    case "up":
      currentX += 10;
      break;
    case "down":
      currentX -= 10;
      break;
    case "left":
      currentY -= 10;
      break;
    case "right":
      currentY += 10;
      break;
  }
};

let addNewShape = () => {
  setNewLocation();
  let x = currentX;
  let y = currentY;
  if (hueAdding == true) {
    currentHue += 5;
  } else {
    currentHue -= 5;
  }
  let h = currentHue;
  strokeWeight(4);
  stroke(10);
  fill(h, 91, 96);
  heartShape(x, y, 25);
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  addNewShape();
  if (currentHue >= 360) {
    hueAdding = false;
  }
  if (currentHue <= 0) {
    hueAdding = true;
  }
}
```

The biggest thing I learned in this project is the use of HSV color mode, it’s so much easier to use than RGB color mode when you just want to change the hue of the color!
