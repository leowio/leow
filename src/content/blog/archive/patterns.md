---
title: "Pattern"
pubDatetime: 2022-10-08
description: "Randomly generated pattern."
author: Leo Wang
featured: false
draft: false
tags:
  - archive
  - university
  - cc-lab
ogImage: ""
---

### Check out my work [here](https://editor.p5js.org/ImPrankster/sketches/1LLwfvqbr)

![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern1.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern2.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern3.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern4.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern5.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern6.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern7.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern8.png)
![Black pattern on white background](https://imprankster.vercel.app/images/patterns/pattern9.png)

```jsx
function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
  fill(0);
  let r1 = random(-1, 1);
  let r2 = random(-1, 1);
  let r3 = random(-1, 1);
  let r4 = random(-1, 1);
  for (let n = 0; n <= 50; n += 1) {
    let ang2 = map(n, 0, 50, 0, 2 * PI);
    for (let i = 0; i <= 100; i += 1) {
      let ang1 = map(i, 0, 100, 0, 2 * PI);
      circle(
        sin(ang1 * r1) * 150 * abs(cos(ang2 * r2)) + width / 2 + sin(ang2) * 25,
        cos(ang1 * r3) * 150 * abs(cos(ang2 * r4)) +
          height / 2 +
          sin(ang2) * 10,
        3 * abs(sin(ang2))
      );
    }
  }
  saveCanvas();
}
```
