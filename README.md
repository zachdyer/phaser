# Phaser Game Library

Space Trucking uses Phaser. Phaser is built on top of pixi.js. Pixi.js is a low level game library for webgl and fallback to canvas.

## Main Game Object
Phaser uses a main object `game`. The `game` object is declared like this:

    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create });

### Preloader function
The `preload` function is where all the game assets are loaded. Just create a function called `preload` and add the assets in the function.

  function preload () {
      game.load.image('logo', 'img/phaser.png');
  }
