var Ennemy = function (x, y, name) {
  Phaser.Sprite.call(this, paper.game, x, y, 'warrior');
  paper.game.physics.arcade.enable(this);
  this.scale.setTo(2);
  this.anchor.setTo(0.5, 0.5);
  this.newPosX = this.x;
  this.newPosY = this.y;
  this.path = new EasyStar.js();
  this.path.setAcceptableTiles([0]);
  this.path.setIterationsPerCalculation(1000);
  this.health = 100;
  this.animations.add('iddle', [0]);
  this.animations.add('south', [0, 1, 2, 3, 4]);
  this.animations.add('north', [5, 6, 7, 8, 9]);
  this.animations.add('east', [10, 11, 12, 13, 14]);
  this.animations.add('west', [15, 16, 17, 18, 19]);
  this.animations.add('sattack', [20,21,22,23,24]);
  this.animations.add('nattack', [25,26,27,28,29]);
  this.animations.add('eattack', [30,31,32,33,34]);
  this.animations.add('wattack', [35,36,37,38,39]);
  this.name = name;

  this.move = paper.game.time.events.loop(300, function() {
    var anim;
    this.path.setGrid(map.grid);
    this.path.findPath(
        Math.round(this.x / 32),
        Math.round(this.y / 16),
        Math.abs(Math.round(this.newPosX / 32)), //TODO: Bug to fix
        Math.abs(Math.round(this.newPosY / 16)),
          function (path) {
            if (path === null) {
              this.body.velocity.x = 0;
              this.body.velocity.y = 0;
              this.move.pause;
            }
            if (path && path[1]) {
              this.move.resume;
              paper.game.physics.arcade.moveToXY(this, path[1].x * 32, path[1].y * 16);

              walkAnimation(this, path[0].x, path[1].x, path[0].y, path[1].y);

              ennemies.sort('x', Phaser.Group.SORT_ACENDING);
              ennemies.sort('y', Phaser.Group.SORT_ACENDING);
            }
            else {
              this.body.velocity.x = 0;
              this.body.velocity.y = 0;
            }
          }.bind(this));

      this.path.calculate();
    }, this);

  this.attack = function()
  {
    allies.forEach(function(ennemy) {
      if (paper.game.physics.arcade.distanceBetween(this, ennemy) < 32) {
        fightAnimation(this, ennemy);
      }
    }, this);
  };
};

Ennemy.prototype = Object.create(Phaser.Sprite.prototype);
Ennemy.prototype.constructor = Ennemy;
