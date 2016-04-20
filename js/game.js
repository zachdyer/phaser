// Exporting object to global scope
var
  game = null,
  logo = null;

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('logo', 'img/phaser.png');
    }

    function create () {
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(logo);
        logo.body.gravity.y = 300;
        logo.body.bounce.y = 0.3;
        logo.body.collideWorldBounds = true;
    }

    function update () {

    }

};
