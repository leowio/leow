---
author: Leo Wang
pubDatetime: 2026-04-04
title: Map Hunter Game
postSlug: map-hunter-game
featured: false
draft: false
tags:
  - project
  - game
  - programming
description: A GPS-based multiplayer game where hunters place invisible traps and survivors cooperate to stay alive
---

# Map Hunter Game

**Map Hunter** is a real-time, GPS-based multiplayer game where players physically move through the real world to compete on a live map. One player is randomly chosen as the Hunter, who places invisible detection circles on the map to trap survivors. The remaining players are Survivors, who must stay close to each other to earn cooperation points — while avoiding the hunter's traps. It's a tense, physical game of cat-and-mouse that turns any outdoor space into a 500m x 500m arena. Grab your phones, step outside, and find out who's really paying attention.

## How to Play

You'll need at least two people with smartphones and a modern browser that supports GPS. Everyone opens the game URL, taps "Request GPS" to grant location permission, and the map loads centered on the first player's position. Type in a name, hit "Ready," and once everyone's ready the game begins.

One random player becomes the **Hunter** (shown with a red banner) and everyone else becomes a **Survivor** (blue banner). The two roles play very differently.

As the **Hunter**, you see a white dashed circle around you showing your 70m placement range. Tap anywhere within it to drop a detection circle with a 30m radius. You can have up to 3 active at once — placing a 4th removes the oldest, with a 1-second cooldown between placements. You earn 10 points per second for each survivor standing inside your circles. The catch is that you only receive survivor location updates every 20 seconds, so you're always working with stale information and need to predict where people are heading.

As a **Survivor**, you move around physically and try to stay within 100m of other survivors to earn proximity points (up to 5 per second per nearby pair, scaling linearly with distance). You can see other survivors in real-time, but you cannot see the hunter or their circles. If you wander into one, your screen flashes red with a warning and your score gain pauses until you leave.

The game area is a 500m x 500m square centered on the first player's GPS position, marked with a yellow border. Everything outside is darkened. Both roles have a score cap of 10,000.

## Reflection

### My Contribution

I worked on the main part of the code for this project — the core game logic, the server, and the client-side rendering. On the backend (`server.js`), I built the full Node.js/Express/Socket.IO server: role assignment, the scoring engine, circle placement with cooldown and range validation, game area generation, and the privacy system that limits how often the hunter receives survivor positions. On the frontend (`sketch.js`), I implemented the p5.js + Mappa.js map overlay, player rendering with smooth lerp animations, the HUD for both roles, the hunter's range and circle visualization, and the red-flash warning for caught survivors. I also handled GPS integration (`requestGPS.js`) with WGS-84 to GCJ-02 coordinate conversion so the game works accurately on Chinese map tiles, and used Eruda for on-device mobile debugging during playtesting.

The thing I'm most proud of is the **asymmetric information design**. Survivors see each other in real-time but can't see the hunter or the circles, while the hunter only gets delayed location snapshots every 20 seconds. This creates genuine tension and forces the hunter to think strategically about where to place circles rather than just reactively dropping them on top of visible players.

### What I Learned

The biggest technical takeaway was learning how to build real-time multiplayer architecture with Socket.IO. Managing game state on a server and selectively broadcasting different data to different clients based on their role — emitting different events to different sockets — was completely new to me. I also gained a much deeper understanding of GPS and coordinate systems: using the Haversine formula for real-world distance calculations, converting between WGS-84 and GCJ-02 coordinate systems for Chinese map tiles, and translating GPS coordinates to pixel positions on a tiled map at varying zoom levels.

### Challenges

The hardest part was balancing the scoring system. During user testing, players found scoring confusing and felt it was unbalanced between hunters and survivors. The hunter earns 10 points per second per caught survivor, which racks up fast, while survivors earn at most 5 points per second per nearby pair — and only when neither is caught. When multiple survivors get trapped in circles, the hunter's score snowballs while survivor scoring gets completely shut down. I tried adjusting the numbers and making the proximity formula configurable (linear, quadratic, or exponential), but didn't fully resolve the balance issue before the deadline. The fundamental tension is that the hunter's scoring is doubly punitive — gaining hunter points while simultaneously denying survivor points — while survivor scoring requires active cooperation that's easily disrupted.

### Next Time

If I rebuilt this project, the first priority would be redesigning the scoring. Survivors could earn a passive score over time that only gets reduced when caught, rather than requiring constant proximity. Or they could get abilities to disable or dodge hunter circles, adding counter-play. The game also needs a proper timer and end condition — right now it runs indefinitely until the hunter disconnects, which doesn't feel like a complete experience. I'd also reconsider the hunter's 20-second update interval; a "sonar ping" mechanic where the hunter can request a real-time snapshot on a cooldown might add more tactical depth without removing the core asymmetry.

Looking further ahead, I'd love to explore expanding the role system — adding a scout who can reveal circle locations to other survivors, or a decoy who shows up on the hunter's radar but gives no points when caught. More roles would create deeper strategy in larger groups and make the game feel less binary.

## Technical Reference

The backend runs on Node.js with Express 5 and Socket.IO 4.8 over HTTPS. The frontend uses p5.js for canvas rendering and Mappa.js (Leaflet-based) for map tiles from AutoNavi. GPS positions are obtained via the HTML5 Geolocation API and converted from WGS-84 to GCJ-02 for Chinese map accuracy.

The main files are `server.js` (game state, scoring engine, Socket.IO events), `public/sketch.js` (map overlay, player rendering, HUD), `public/requestGPS.js` (GPS permissions and coordinate conversion), and `public/index.html` (lobby UI and canvas container).

All scoring parameters are configurable in the `scoringConfig` object in `server.js`:

```javascript
hunterPointsPerPlayerInCircle: 10; // Hunter pts/sec per caught survivor
survivorProximityMaxDistance: 100; // Max distance (m) for proximity bonus
survivorProximityMaxPoints: 5; // Max survivor pts/sec per pair
survivorProximityFormula: "linear"; // "linear" | "quadratic" | "exponential"
hunterCircleRadius: 30; // Detection circle radius (m)
maxHunterCircles: 3; // Max simultaneous circles
hunterCircleCooldownMs: 1000; // Cooldown between placements
hunterCircleMaxRange: 70; // Max placement distance from hunter (m)
hunterPlayerUpdateIntervalMs: 20000; // Hunter receives positions every 20s
```
