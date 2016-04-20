# Phaser Game Library

Space Trucking uses Phaser. Phaser is built on top of pixi.js. Pixi.js is a low level game library for webgl and fallback to canvas.

## Main Game Object
Phaser uses a main object `game`. The `game` object is declared like this:

    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create });
