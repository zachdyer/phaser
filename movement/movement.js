// Exporting object to global scope
var
  game = null,
  cursors = null,
  ship = null,
  sfx = null,
  space = null,
  thrust = null,
  ship = null;

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('ship', '../img/6B.png');
        game.load.image('space', '../img/space.png');
        game.load.spritesheet('thrust', '../img/thrust.png', 51, 50);
        game.load.audio('thruster_sfx', '../audio/thruster.wav');
    }

    function create () {
      game.world.setBounds(-1000, -1000, 2000, 2000);

      space = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'space');
      space.fixedToCamera = true;

      ship = game.add.sprite(0, 0, 'ship');
      ship.speed = 0;
      ship.anchor.setTo(0.5, 0.5);
      game.physics.enable(ship, Phaser.Physics.ARCADE);
      ship.body.maxVelocity.setTo(400, 400);
      ship.body.drag.set(0.2);
      ship.body.collideWorldBounds = true;


      thrust = game.add.sprite(0, 0, 'thrust');
      thrust.anchor.setTo(1.75, 0.5);
      game.physics.enable(thrust, Phaser.Physics.ARCADE);
      thrust.body.maxVelocity.setTo(400, 400);
      thrust.body.drag.set(0.2);
      thrust.animations.add('up', [0, 1, 2], 30, true);
      thrust.visible = false;

      sfx = game.add.audio('thruster_sfx');
      sfx.loop = true;

      game.camera.follow(ship);
      game.camera.deadzone - new Phaser.Rectangle(150, 150, 500, 300);
      game.camera.focusOnXY(0, 0);

      cursors = game.input.keyboard.createCursorKeys();

      var text = game.add.text(0, 0, 'Press the up arrow key for thrust and right and left to turn the ship.', { fontSize: '32px', fill: '#fff'});
      text.anchor.setTo(0.5);
    }

    function update () {


      if (cursors.left.isDown) {
        ship.angle--;
      }
      if (cursors.right.isDown) {
        ship.angle++;
      }
      //Throttle
      if(cursors.up.isDown) {
        ship.speed = 300;
        thrust.visible = true;
        thrust.animations.play('up');
        if (sfx.isPlaying != true) {
          sfx.volume = 1;
          sfx.play();
        }

      } else {
        thrust.visible = false;
        sfx.stop();
        if(ship.speed > 0) {
          ship.speed -= 4;
        }
      }
      if(cursors.down.isDown) {

      }

      if(ship.speed > 0) {
        game.physics.arcade.velocityFromRotation(ship.rotation, ship.speed, ship.body.velocity);
      }

      space.tilePosition.x = -game.camera.x;
      space.tilePosition.y = -game.camera.y;

      thrust.x = ship.x;
      thrust.y = ship.y;
      thrust.rotation = ship.rotation;
    }

};

window.onresize = function() {
  game.width = window.innerWidth;
  game.height = window.innerHeight;
};
