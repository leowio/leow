---
pubDatetime: 2023-12-09
title: Interaction Lab Final Report
postSlug: ilab-final-report
tags:
  - university
  - interaction-lab
description: Interaction Lab final project documentation
---

<iframe
  src="https://player.cloudinary.com/embed/?public_id=blog%2FLIFE_wovnyf&cloud_name=leow"
  width="640"
  height="360"
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  frameborder="0"
>Documentation video</iframe>

## Inspiration

In _Life_, you inspect algorithmically generated microorganisms on a “digital petri dish”.

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. To put it simply, it is just a set of rules that dictates the generation and destruction of cells in the "Game of Life Universe", which is an infinite, two-dimensional orthogonal grid of square cells. Although the rules are simple, the result of the Game of Life is very complex. There are an infinite number of potential life forms and interactions between those life forms. You can learn more about it [here](https://en.wikipedia.org/wiki/Conway's_Game_of_Life).

The goal is to make the user feel like they are observing a real biome of microorganisms, and think about how at the most fundamental level, life is just some rules that dictate how cells behave.

## Design

The main part of the design is a large box to house the laptop. I spent a lot of time on how to make the computer "invisible" to the player. Obviously I have to use processing to display the game of life, but I don't want it just to be a laptop to a bunch of controls. I explored a bunch of options, like projectors, external displays, or mirrors and optics, but surprisingly the simplest solution works the best - I just built a case for my laptop and a laser-cut cylinder to look into the screen.

![Laser cutting process](https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/v1/blog/qshex8sgvwtldcm3knj4)

The player can use the buttons on the device to pan the canvas, and the knob to zoom in and out, just like on a real microscope.

The sign on top is also made by the laser cutter and has the logo and some common "creatures" in the Game of Life Universe the player can look for.

![Life LOGO](https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/v1/blog/t9mywdciti3dff55vozi)

## Implementation

The whole "petri dish" is essentially a giant 2D array which is calculated and updated constantly according to the four rules in Conway's Game of Life.

![Code](https://res.cloudinary.com/leow/image/upload/v1702139646/Screenshot_2023-12-10_at_00.33.30_zdevw5.png)

To make the visual and audio more pleasing, I added the beeping sound in the background that changes the pitch based on how many cells are on the whole board. I also made the cells "blink" different shade of colors to be more lively.

## Improvements

There are some functionalities I can implement to make the project more interactive, such like making the player able to "draw" on the canvas to better observe how the "creatures" interact with each other. However, because of how the board is rendered on the screen, it's hard to implement such a feature. Also, there can be more audio & visual improvements like making the different kind of creatures have different colors and play different sounds. The fabrication of the outer shell of the device can also be improved by laser cutting more parts so that it can be more sturdy.
