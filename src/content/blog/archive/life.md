---
title: "The Game of Life"
pubDatetime: 2022-11-10
description: "Midterm Project - Game of Life"
author: Leo Wang
featured: false
draft: false
tags:
  - archive
  - university
  - cc-lab
ogImage: ""
---

### Check out my work [here](https://editor.p5js.org/ImPrankster/sketches/vxE7cGnh2)

## Why is the Game of Life

Conway's Game of Life has always been a topic that fascinates me a lot. It is so simple, yet also produces such a complex result. When I saw the prompt for Project A, I know it will be perfect if I could implement it in a more interesting way.

## What is the Game of Life

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. To put it simply, it is just a set of rules that dictates the generation and destruction of cells in the "Game of Life Universe", which is an infinite, two-dimensional orthogonal grid of square cells. Although the rules are simple, the result of the Game of Life is very complex. There are an infinite number of potential life forms and interactions between those life forms. You can learn more about it [here](https://en.wikipedia.org/wiki/Conway's_Game_of_Life).

## Observation and Interaction

A large part of the experience I wanted the user to have was the observation of the "Game of Life Universe". I implemented features to allow the user to do just that. I implemented a slider to control the scaling of the canvas, and also a joystick to control let the user move around the canvas.

And the other important part of the experience is the Interaction. I want the user to be able to interact with the "Game of Life Universe", thus came the "God Mode" button. This button allows the user to make some cell alive or died, allowing more interesting discoveries and a sense of involvement.

## Being a God, it's hard

When I'm thinking about how to make the God Mode, my first idea was that since it just need me to change the state of the living cell when I click on it, I'll just make every cell a button that invokes a function to change the state of the cell when it's clicked, right? While it turned out to be not the solution, the resources it takes to render so many buttons is too much and it won't run very well. So I have to find another way to realize this feature. I developed an algorithm to calculate the position of the cell in the 2D array with the mouse position when mouse was clicked. It turned to work beautifully.

## Inspiration from the Internet

When I'm designing the look of my project, I watched tons of youtube videos about microscopes. I wanted my work to look like real organism as much as possible. You can check out one of the most inspirational channel [here](https://www.youtube.com/c/microcosmos). One thing I noticed was that microscopes can cause and effect called [chromatic aberration](https://en.wikipedia.org/wiki/Chromatic_aberration). I implemented this effect in my code, making it more asethetically pleasing.

## Credits

I used many open-source projects in my code, without them, my project can't be full.  
[p5.js official Game of Life example](https://p5js.org/examples/simulate-game-of-life.html), only the generation calculation algorithm are used (< 30 lines of code).  
[Joystick in Javascript by Roberto D'Amico](https://www.cssscript.com/onscreen-joystick/).  
[CSS for the slider from W3Schools](https://www.w3schools.com/howto/howto_js_rangeslider.asp).  
[CSS for the button from CSS scan](https://getcssscan.com/css-buttons-examples).
