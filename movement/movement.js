// Exporting object to global scope
var
  game = null,
  cursors = null,
  ship = null;
  speed = 200;

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('ship', '6B.png');
    }

    function create () {
      ship = game.add.sprite(game.world.centerX, game.world.centerY, 'ship');
      game.physics.arcade.enable(ship);
      ship.body.collideWorldBounds = true;

      cursors = game.input.keyboard.createCursorKeys();

      game.add.text(16, 16, 'Press the arrow keys to move the ship.', { fontSize: '32px', fill: '#fff' });
    }

    function update () {
      //  Reset the players velocity (movement)
      ship.body.velocity.x = 0;
      ship.body.velocity.y = 0;

      if (cursors.left.isDown) {
        ship.body.velocity.x = -speed;
      }
      if (cursors.right.isDown) {
        ship.body.velocity.x = speed;
      }
      if(cursors.up.isDown) {
        ship.body.velocity.y = -speed;
      }
      if(cursors.down.isDown) {
        ship.body.velocity.y = speed;
      }
    }

};
