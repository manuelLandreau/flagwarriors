var Caracter = function(x, y, name)
{
  Phaser.Sprite.call(this, paper.game, x, y, 'warrior');
  paper.game.physics.arcade.enable(this);
  this.inputEnabled = true;
  this.scale.setTo(2);
  this.input.priorityID = 1;
  this.anchor.setTo(0.5, 0.2);
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
  this.animations.add('attack', [20,21,22,23,24]);
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
    if (this.selected && pointer.x < 480 && pointer.y < 640) {
      this.newPosX = pointer.x;
      this.newPosY = pointer.y;
    }
  }, this);

  this.move = function()
  {
    if (paper.game.physics.arcade.distanceToXY(this, this.newPosX, this.newPosY) > 2)
    {
      this.path.setGrid(map.grid);
      this.path.findPath(
        Math.round(this.body.position.x / 32),
        Math.round(this.body.position.y / 16),
        Math.round((this.newPosX - 16) / 32),
        Math.round((this.newPosY - 16) / 16),
        function(path) {
          var currentNextPointX , currentNextPointY, anim;
          if (path === null)
          {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

          }
          if (path && path[1]) {
            currentNextPointX = path[1].x;
            currentNextPointY = path[1].y;

            paper.game.physics.arcade.moveToXY(this, currentNextPointX * 32 + 16, currentNextPointY * 16 + 12);

            if (path[0].x > path[1].x && path[0] > path[1].y) {
              this.animations.play('west', 10, false);
              anim = 'east';
            }
            else if (path[0].x > path[1].x && path[0].y < path[1].y) {
              this.animations.play('north', 10, false);
              anim = 'south';
            }
            else if (path[0].x < path[1].x && path[0].y < path[1].y) {
              this.animations.play('north', 10, false);
              anim = 'south';
            }
            else if (path[0].x < path[1].x && path[0].y > path[1].y) {
              this.animations.play('east', 10, false);
              anim = 'west';
            }
            else if (path[0].x == path[1].x && path[0].y > path[1].y) {
              this.animations.play('north', 10, false);
              anim = 'south';
            }
            else if (path[0].x == path[1].x && path[0].y < path[1].y) {
              this.animations.play('south', 10, false);
              anim = 'north';
            }
            else if (path[0].x > path[1].x && path[0].y == path[1].y) {
              this.animations.play('east', 10, false);
              anim = 'west';
            }
            else if (path[0].x < path[1].x && path[0].y == path[1].y) {
              this.animations.play('west', 10, false);
              anim = 'east';
            }
            socket.emit('is_moving', {name: this.name, x: this.x, y: this.y, anim: anim});
            allies.sort('x', Phaser.Group.SORT_ACENDING);
            allies.sort('y', Phaser.Group.SORT_ACENDING);
          }
          else {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
          }
        }.bind(this));
      this.path.calculate();
    } else {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
    }
  };

  this.attack = function()
  {
    ennemies.forEach(function(ennemy) {
      if (paper.game.physics.arcade.distanceBetween(this, ennemy) < 16) {
        socket.emit('attack', {name: this.name, damage: paper.game.rnd.integerInRange(0.2, 0.5)});
        this.animations.play('attack');
      }
    }, this);
  };

  this.damage = function(lp)
  {
    this.health -= lp;
    if (this.health < 0)
      this.kill();
    socket.emit('death', {name: this.name});
  };
}
Caracter.prototype = Object.create(Phaser.Sprite.prototype);
Caracter.prototype.constructor = Caracter;
