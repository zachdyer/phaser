// Exporting object to global scope
var
  game = null,
  cursors = null,
  ship = null;
  speed = 200,
  thrust = null,
  sfx = null;

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('ship', '../img/6B.png');
        game.load.spritesheet('thrust', '../img/thrust.png', 50, 50);
        game.load.audio('thruster_sfx', '../audio/thruster.wav');
    }

    function create () {
      ship = game.add.sprite(game.world.centerX, game.world.centerY, 'ship');
      ship.anchor.setTo(0.5, 0.5);

      thrust = game.add.sprite(game.world.centerX, game.world.centerY, 'thrust');
      thrust.anchor.setTo(1.75, 0.5);
      thrust.angle = -90;

      var anim = thrust.animations.add('up', [0, 1, 2], 30, true);

      sfx = game.add.audio('thruster_sfx');
      sfx.loop = true;
      sfx.play();

      //game.add.text(16, 16, 'Press the arrow keys to move the ship.', { fontSize: '32px', fill: '#fff' });
    }

    function update () {
        thrust.animations.play('up');
    }

};
