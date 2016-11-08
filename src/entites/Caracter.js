var Caracter = function (x, y, name) {
    Phaser.Sprite.call(this, paper.game, x, y, 'warrior');
    paper.game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.inputEnabled = true;
    this.scale.setTo(2);
    this.input.priorityID = 1;
    this.anchor.setTo(0.5, 0.5);
    this.selected = false;
    this.newPosX = this.x;
    this.newPosY = this.y;
    this.pathx = this.x / 32;
    this.pathy = this.y / 16;
    this.path = new EasyStar.js();
    this.path.setAcceptableTiles([0]);
    this.path.setIterationsPerCalculation(1000);
    this.health = 100;
    this.name = name;
    allies.push(this);
    all.add(this);
    // Anim
    this.animations.add('south', [0, 1, 2, 3, 4]);
    this.animations.add('north', [5, 6, 7, 8, 9]);
    this.animations.add('east', [10, 11, 12, 13, 14]);
    this.animations.add('west', [15, 16, 17, 18, 19]);
    this.animations.add('sattack', [0, 20, 21, 22, 23, 24]);
    this.animations.add('nattack', [5, 25, 26, 27, 28, 29]);
    this.animations.add('eattack', [10, 30, 31, 32, 33, 34]);
    this.animations.add('wattack', [15, 35, 36, 37, 38, 39]);

    this.select = function () {
        allies.forEach(function (caracter) {
            caracter.selected = false;
        });
        this.selected = true;
    };
    this.events.onInputDown.add(this.select, this);

    paper.game.input.onUp.add(function (pointer) {
        if (gameOn && this.selected && pointer.x < 477 && pointer.y < 797 && pointer.x > 3 && pointer.y > 3) {
            this.newPosX = pointer.x;
            this.newPosY = pointer.y;

            this.move;
        }
    }, this);

    this.move = paper.game.time.events.loop(300, function () {
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
                    all.sort('x', Phaser.Group.SORT_ACENDING);
                    all.sort('y', Phaser.Group.SORT_ACENDING);

                    // Set obstacle on the caracter and emit
                    if (this.pathx != path[0].x || this.pathy != path[0].y) {
                        socket.emit('is_moving', {
                            nextx: path[1].x * 32,
                            nexty: path[1].y * 16,
                            name: this.name,
                            gameId: gameId
                        });
                        // map.caracterObstacle(this.pathx, this.pathy, 0);
                    }
                    // map.caracterObstacle(path[0].x, path[0].y, 1);
                    this.pathx = path[0].x;
                    this.pathy = path[0].y;
                }
                else {
                    if (this.body)
                        this.body.velocity.setTo(0, 0);
                }
            }.bind(this));
        this.path.calculate();
    }, this);

    this.attack = paper.game.time.events.loop(Phaser.Timer.SECOND, function () {
        ennemies.forEach(function (ennemy) {
            if (ennemy.alive && paper.game.physics.arcade.distanceBetween(this, ennemy) < 32) {
                socket.emit('attack', {
                    name: ennemy.name,
                    damage: paper.game.rnd.integerInRange(4, 10),
                    gameId: gameId
                });
                fightAnimation(this, ennemy);
                swordSound();
                console.log('fight');
            }
        }, this);
    }, this);

    this.getFlag = function () {
        if (paper.game.physics.arcade.distanceBetween(this, theirFlag) < 32) {
            socket.emit('got_flag', {name: this.name, gameId: gameId});
            theirFlag.x = this.x;
            theirFlag.y = this.y - 24;
        }
    }.bind(this);

    this.damage = function (lp) {
        this.health -= lp;
        if (this.health < 0) {
            if (this.alive)
                deadWarior++;
            this.kill();
            socket.emit('death', {name: this.name, gameId: gameId});
            if (deadWarior > 5) {
                socket.emit('we_have_a_looser', {gameId: gameId});
                var looser = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.LOOSE, {
                    fill: '#000000',
                    font: 'bold 32px Almendra'
                });
                looser.anchor.setTo(0.5);
                if (logged) {
                    var body = {
                        token: window.localStorage.getItem('jtw'),
                        victory: false,
                        defeat: true
                    };
                    $.ajax({
                        url: 'http://127.0.0.1:3000/update_ratio',
                        type: 'PUT',
                        data: body,
                        success: function (data) {
                            user_infos = data.infos;
                        },
                        error: function (err) {
                        }
                    });
                }
                paper.game.paused = true;
            }
        }
    };

    this.events.onKilled.add(function () {
        socket.emit('death', {name: this.name, gameId: gameId});
        var skeleton = paper.game.add.sprite(this.x, this.y, 'skeleton');
        skeleton.anchor.setTo(0.5, 0.5);
        all.add(skeleton);
        skeleton.animations.add('death', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
        skeleton.animations.play('death', 10, false);
        this.x = 0;
        this.y = 800;
    }, this);
};

Caracter.prototype = Object.create(Phaser.Sprite.prototype);
Caracter.prototype.constructor = Caracter;
