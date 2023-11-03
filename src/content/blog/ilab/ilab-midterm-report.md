---
author: Leo Wang
pubDatetime: 2023-10-18
title: Jan-Ken-Pon Machine
postSlug: ilab-midterm
featured: false
draft: false
tags:
  - university
  - interaction-lab
description: Interaction Lab midterm project documentation
---

After a half semester of learning about building interactive projects with digital & physical technologies, and I present you the midterm project - the Jan-ken-pon Machine.

What is a Jan-ken-pon machine? It's a machine that plays rock paper scissor (Jan-ken-pon in English) with you. It can help you decide on daily decisions if you are a chronicle procrastinator like me.

I came up with the idea of making a rock paper scissor machine when I'm watching an anime "Nichijou" and there was a [cute little sequence](https://www.youtube.com/watch?v=2t9uaOuiYHk) where two characters are playing rock paper scissors and singing the Jan-ken-pon song. I think to my self: how cool will it be if you can play rock paper scissors with a little machine?

There are already ways you can play rock paper scissors on you phones or computers, but I think there's always problem with these implementations which is how do you actually know the machine is playing fairly, as computers can react to the input incredibly fast, and you don't actually know if they are intentional with they letting you win or not. Obviously most of the time you can trust the coding behind the machine is fair. But how cool will it be if it's a machine that can't cheat.

The way I want to implement this is to have a structure that let the machine make the decision first, and then let the player make the decision. And only after the player made the decision, the machine will reveal the result.

## Prototype

For the prototype we built three hands controlled by servo motors to represent the machine's decision of rock, paper and scissors. I like this contraption a lot, so I build three more to provide visual feedback when player chose a move through pressing the buttons.

To indicate when to make moves, and whether the player has won, lose or draw, I made three sound effects the machine can play with a buzzer. I also pulled down a music from Pac-Man from the internet to play when the machine is idle.

I used state machine to control the game flow. Each state has it's looping function that gets executed when the game state is set to said state, to detect button pressing, play sound, lighting, etc.

![Prototype](https://res.cloudinary.com/leow/image/upload/v1697956107/blog/uhikscj3zsuxdmifmnwy.jpg)

## Testing

With our prototype, we went to user testing with a bunch of our friends, classmates and teachers. One complaint we heard the most is the confusing placement of the two sets of hands. We placed the player controlled hands on the player's side and the machine's hands on the opposite side, so you can only see what move did the machine play if you go around the table. However, the intuitive understanding is that the hands you are looking at is the machine's, so players always misread the result. The indicator sound is also not clear enough.

After user testing, we changed the design to reflect the feedback we got. We removed the set of hand that indicates player's move because it was unnecessary, and moved the machine controlled set of hand to the player's side. Also, we added a lid that opens and closes automatically to reveal the result after player made their move. We also added lights along with sounds to better visualize the different information.

## Final product

![Wiring](https://res.cloudinary.com/leow/image/upload/v1697957427/blog/WechatIMG347_t2y5hv.jpg)

We made a casing shaped like an arcade for all the components to reside in. The lid is controlled by another servo motor. And we also added lights to indicate the different state of the game.

![Final product](https://res.cloudinary.com/leow/image/upload/v1697956107/blog/rbgwjfga98uqcs2ahwr9.jpg)

Finally, we painted it with white and red colors, added decorations and instructions to make the whole experience more intuitive.
