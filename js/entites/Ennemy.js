var Ennemy = function(x, y, game)
{
  Phaser.Sprite.call(this, game, x, y, 'warrior');
  game.physics.arcade.enable(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(2);
  this.health = 100;

  this.attack = function()
  {
    allies.forEach(function(caracter) {
      if (game.physics.arcade.distanceBetween(this, caracter) < 150 && game.physics.arcade.distanceBetween(this, caracter) > 5) {
        game.physics.arcade.moveToObject(this, caracter);
      }
      if (game.physics.arcade.distanceBetween(this, caracter) < 50) {
        var damagePoint = Math.random();
        caracter.damage(damagePoint);
      }
    }, this);
  }
}

Ennemy.prototype = Object.create(Phaser.Sprite.prototype);
Ennemy.prototype.constructor = Ennemy;
