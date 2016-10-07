var Tower = function(x, y, name, ennemyGroup) {
  Phaser.Sprite.call(this, paper.game, x, y, 'tower');
  paper.game.physics.arcade.enable(this);
  this.name = name;
  this.anchor.setTo(0.33, 0.5);
  this.ennemies = ennemyGroup;

  this.attack = function () {
    this.arrowAttack = paper.game.time.events.loop(Phaser.Timer.SECOND * 3, function() {
      this.ennemies.forEach(function(ennemy) {
        if (paper.game.physics.arcade.distanceBetween(this, ennemy) < 64 &&
            paper.game.physics.arcade.distanceBetween(this, ennemy) > -64)
        {
          var arrow1 = paper.game.add.sprite(this.x, this.y, 'arrow');
          arrowGroup.add(arrow1);
          paper.game.physics.arcade.enable(arrow1);
          arrow1.rotation = paper.game.physics.arcade.angleToXY(arrow1, ennemy.x, ennemy.y)+ 1.6;
          paper.game.physics.arcade.moveToObject(arrow1, ennemy, 200);
        }
      }, this);
    }, this);
  }
}

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;
