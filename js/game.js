// Exporting object to global scope
var
  game = null,
  logo = null,
  cursors = null;

window.onload = function() {

    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload () {
        game.load.image('logo', 'img/phaser.png');
    }

    function create () {
      var logos = game.add.group();
      logos.enableBody = true;

      for (var i = 0; i < 12 * Math.random(); i++)
      {
          var logo = logos.create(game.world.width * Math.random(), game.world.height * Math.random(), 'logo');

          logo.body.gravity.y = 300;
          logo.body.bounce.y = 0.3;
          logo.body.collideWorldBounds = true;
      }

    }

    function update () {

    }

};
