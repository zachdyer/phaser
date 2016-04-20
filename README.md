# Phaser Game Library
Space Trucking uses Phaser. Phaser is built on top of pixi.js. Pixi.js is a low
level game library for webgl and fallback to canvas.

## Main Game Object
Phaser uses a main object `game`. The `game` object is declared like this:

    var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '', { preload: preload, create: create });

### Preloader function
The `preload` function is where all the game assets are loaded. Just create a
function called `preload` and add the assets in the function.

    function preload () {
        game.load.image('logo', 'img/phaser.png');
    }

To load an asset such as an image use `game.load.image('assetName', 'path/file.png')`.

### Create function
The `create` function creates the game after the 'preload' function is finished.

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

To create a sprite use `var logo = game.add.sprite(x, y, 'assetName')`. Use the
name of the asset you set when you loaded the image.

To set the alignment position of a sprite use `logo.ancho.setTo(0.5, 0.5)`. This
will center align the sprite on the x and y axis.

### Update function
The `update` function updates every tick. Just declare a function called `update`
and it will be used.

    function update () {
        
    }
