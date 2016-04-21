// Exporting object to global scope
var
  game = null,
  cursors = null,
  ship = null,
  sfx = null,
  space = {
    sprites: [],
    width: 1280,
    height: 720
  },
  ship = {
    x: 0,
    y: 0,
    sprite: null
  };

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('ship', '../img/6B.png');
        game.load.image('space', '../img/space.png');
        game.load.spritesheet('thrust', '../img/thrust.png', 51, 50);
        game.load.audio('thruster_sfx', '../audio/thruster.wav');
    }

    function create () {
      for(var x = 0; x < game.world.width / space.width; x++) {
        space.sprites[x] = [];
        for(var y = 0; y < game.world.height / space.height; y++) {
          space.sprites[x][y] = game.add.sprite(x * space.width, y * space.height, 'space');
        }
      }

      ship.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'ship');
      ship.sprite.anchor.setTo(0.5, 0.5);

      thrust = game.add.sprite(game.world.centerX, game.world.centerY, 'thrust');
      thrust.anchor.setTo(1.75, 0.5);
      thrust.angle = -90;
      thrust.animations.add('up', [0, 1, 2], 30, true);
      thrust.visible = false;



      sfx = game.add.audio('thruster_sfx');
      sfx.loop = true;

      cursors = game.input.keyboard.createCursorKeys();

      game.add.text(16, 16, 'Press the up arrow key for thrust and right and left to turn the ship.', { fontSize: '32px', fill: '#fff' });
    }

    function update () {


      if (cursors.left.isDown) {
        ship.sprite.angle--;
        thrust.angle--;
      }
      if (cursors.right.isDown) {
        ship.sprite.angle++;
        thrust.angle++;
      }
      //Throttle
      if(cursors.up.isDown) {
        for(var x = 0; x < space.sprites.length; x++) {
          for(var y = 0; y < space.sprites[x].length; y++) {
            //space.sprites[x][y].y++;
          }
        }

        thrust.visible = true;
        thrust.animations.play('up');

        if (sfx.isPlaying != true) {
          sfx.volume = 1;
          sfx.play();
        }
      } else {
        thrust.visible = false;
        sfx.stop();
      }
      if(cursors.down.isDown) {

      }
    }

};
