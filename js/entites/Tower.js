var Tower = function(x, y) {
  Phaser.Sprite.call(this, paper.game, x, y, 'tower');

  this.attack = function () {
    this.arrowAttack = paper.game.time.events.loop(Phaser.Timer.SECOND * 3, function () {
      ennemies.forEach(function (caracter) {
        if (paper.game.physics.arcade.distanceBetween(this, caracter) < 150 &&
            paper.game.physics.arcade.distanceBetween(this, caracter) > 0)
        {
          var arrow1 = paper.game.add.sprite(this.x, this.y, 'arrow');
          arrowGroup.add(arrow1);
          paper.game.physics.arcade.enable(arrow1);
          arrow1.rotation = paper.game.physics.arcade.angleToXY(arrow1, caracter.x, caracter.y)+ 1.6;
          paper.game.physics.arcade.moveToObject(arrow1, caracter, 200);
        }
      }, this);
    }, this);
  }
}

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;
