var Ennemy = function (x, y, name) {
  Phaser.Sprite.call(this, paper.game, x, y, 'warrior');
  paper.game.physics.arcade.enable(this);
  this.scale.setTo(2);
  this.anchor.setTo(0.5, 0.2);
  this.health = 100;
  this.animations.add('south', [0, 1, 2, 3, 4]);
  this.animations.add('north', [5, 6, 7, 8, 9]);
  this.animations.add('east', [10, 11, 12, 13, 14]);
  this.animations.add('west', [15, 16, 17, 18, 19]);
  this.name = name;
};

Ennemy.prototype = Object.create(Phaser.Sprite.prototype);
Ennemy.prototype.constructor = Ennemy;
