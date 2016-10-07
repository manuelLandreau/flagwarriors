var Caracter = function(x, y, name)
{
  Phaser.Sprite.call(this, paper.game, x, y, 'warrior');
  paper.game.physics.arcade.enable(this);
  this.inputEnabled = true;
  this.scale.setTo(2);
  this.input.priorityID = 1;
  this.anchor.setTo(0.5, 0.5);
  this.selected = false;
  this.newPosX = this.x;
  this.newPosY = this.y;
  this.path = new EasyStar.js();
  this.path.setAcceptableTiles([0]);
  this.path.setIterationsPerCalculation(1000);
  this.health = 100;
  this.animations.add('south', [0,1,2,3,4]);
  this.animations.add('north', [5,6,7,8,9]);
  this.animations.add('east', [10,11,12,13,14]);
  this.animations.add('west', [15,16,17,18,19]);
  this.animations.add('sattack', [20,21,22,23,24,0]);
  this.animations.add('nattack', [25,26,27,28,29,5]);
  this.animations.add('eattack', [30,31,32,33,34,10]);
  this.animations.add('wattack', [35,36,37,38,39,15]);
  this.name = name;

  this.select = function()
  {
    allies.forEach(function(caracter) {
      caracter.selected = false;
    }, this);
    this.selected = true;
  };
  this.events.onInputDown.add(this.select, this);

  paper.game.input.onUp.add(function(pointer)
  {
    if (this.selected && pointer.x < 478 && pointer.y < 640) {
      this.newPosX = pointer.x;
      this.newPosY = pointer.y;

      this.move;
    }
  }, this);

  this.move = paper.game.time.events.loop(300, function() {
    this.path.setGrid(map.grid);
    this.path.findPath(
      Math.round(this.x / 32),
      Math.round(this.y / 16),
      Math.abs(Math.round(this.newPosX / 32)), //TODO: Bug to fix
      Math.abs(Math.round(this.newPosY / 16)),
      function(path) {
        if (path === null) {
          this.body.velocity.x = 0;
          this.body.velocity.y = 0;
          this.move.pause;
        }
        if (path && path[1]) {
          this.move.resume;
          socket.emit('is_moving', {nextx: path[1].x * 32, nexty: path[1].y * 16, name: this.name, gameId: gameId});
          paper.game.physics.arcade.moveToXY(this, path[1].x * 32, path[1].y * 16);

          walkAnimation(this, path[0].x, path[1].x, path[0].y, path[1].y);

          allies.sort('x', Phaser.Group.SORT_ACENDING);
          allies.sort('y', Phaser.Group.SORT_ACENDING);
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
    ennemies.forEach(function(ennemy) {
      if (paper.game.physics.arcade.distanceBetween(this, ennemy) < 32) {
        socket.emit('attack', {name: this.name, damage: paper.game.rnd.integerInRange(0.2, 0.5), gameId: gameId});
        fightAnimation(this, ennemy);
      }
      if (paper.game.physics.arcade.distanceBetween(this, theirFlag) < 32) {
        socket.emit('gotFlag', {name: this.name, gameId: gameId});
        theirFlag.x = this.x;
        theirFlag.y = this.y - 24;
      }
    }, this);
  };

  this.damage = function(lp)
  {
    this.health -= lp;
    if (this.health < 0) {
      var skeleton = paper.game.add.sprite(this.x, this.y, 'skeleton');
      socket.emit('death', {name: this.name, gameId: gameId});
      this.destroy();
      skeleton.animations.add('death', [40,41,42,43,44,45,46,47,48,49]);
      skeleton.animations.play('death', 10, false);

    }
  };
}
Caracter.prototype = Object.create(Phaser.Sprite.prototype);
Caracter.prototype.constructor = Caracter;
