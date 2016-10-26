var Tower = function (x, y, name, ennemyGroup) {
    Phaser.Sprite.call(this, paper.game, x, y, 'tower');
    paper.game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.name = name;
    this.anchor.setTo(0.33, 0.5);
    this.ennemies = ennemyGroup;
    all.add(this);

    this.arrowAttack = paper.game.time.events.loop(Phaser.Timer.SECOND * 3, function () {
        this.ennemies.forEach(function (ennemy) {
            if (ennemy.alive && paper.game.physics.arcade.distanceBetween(this, ennemy) < 150
                || paper.game.physics.arcade.distanceBetween(this, ennemy) < -150) {
                var canon = paper.game.add.audio('canon');
                if (sound)
                    canon.play();
                var arrow = arrows.getFirstExists(false);
                arrow.reset(this.x, this.y);
                paper.game.physics.arcade.enable(arrow);
                arrow.body.onCollide = new Phaser.Signal();
                arrow.body.onCollide.add(function () {
                    canon.stop();
                    var explosion = paper.game.add.audio('explosion');
                    if (sound)
                        explosion.play();
                    var kaboom = explosions.getFirstExists(false);
                    kaboom.reset(ennemy.body.x, ennemy.body.y);
                    kaboom.alpha = 0.7;
                    kaboom.play('kaboom', 30, false, true);
                    if (this.ennemies == ennemies)
                        socket.emit('attack', {
                            name: ennemy.name,
                            damage: paper.game.rnd.integerInRange(14, 22),
                            gameId: gameId
                        });
                    arrow.kill();
                }, this);
                arrow.rotation = paper.game.physics.arcade.angleToXY(arrow, ennemy.x, ennemy.y) + 1.6;
                paper.game.physics.arcade.moveToObject(arrow, ennemy, 300);
            }
        }, this);
    }, this);
};

Tower.prototype = Object.create(Phaser.Sprite.prototype);
Tower.prototype.constructor = Tower;

