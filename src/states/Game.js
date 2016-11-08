paper.Game = function () {
};

paper.Game.prototype = {

    create: function () {

        var background = this.add.image(0, 0, 'background');

        //tile map
        tileGroup = this.add.group();
        map = new Map(this, tileGroup);
        map.spawnTiles();

        // Sword sounds
        sword1 = paper.game.add.audio('sword1');
        sword2 = paper.game.add.audio('sword2');
        pare = paper.game.add.audio('pare');

        //groups
        all = this.add.group();
        allies = [];
        ennemies = [];
        arrows = this.add.group();
        arrows.createMultiple(90, 'arrow');

        ourFlag = this.add.sprite(240, 776, 'flags');
        ourFlag.scale.setTo(2);
        ourFlag.anchor.setTo(0.5, 0.5);
        ourFlag.animations.add('float', [4, 5, 6, 7]);
        ourFlag.animations.play('float', 5, true);
        all.add(ourFlag);

        explosions = this.add.group();
        explosions.createMultiple(90, 'kaboom');
        explosions.forEach(function (kaboom) {
            kaboom.anchor.x = 0.4;
            kaboom.anchor.y = 0.4;
            kaboom.animations.add('kaboom');
        });

        //buttons
        var warriorButton = this.add.image(-16, 772, 'warrior');
        warriorButton.scale.setTo(2);
        wallButton = this.add.button(49, 772, 'walle', wallAction);
        var towerButton = this.add.image(96, 772, 'tower');

        // Drag buttons
        var warriorDrag = this.add.image(16, 804, 'warrior');
        warriorDrag.anchor.setTo(0.5, 0.5);
        warriorDrag.scale.setTo(2);
        warriorDrag.inputEnabled = true;
        warriorDrag.input.enableDrag();
        warriorDrag.events.onDragStart.add(spriteDragStart, this);
        warriorDrag.events.onDragUpdate.add(onDragSprite, this);
        warriorDrag.events.onDragStop.add(addWarrior, this);

        var towerDrag = this.add.image(120, 812, 'tower');
        towerDrag.anchor.setTo(0.5, 0.5);
        towerDrag.inputEnabled = true;
        towerDrag.input.enableDrag();
        towerDrag.events.onDragStart.add(spriteDragStart, this);
        towerDrag.events.onDragUpdate.add(onDragSprite, this);
        towerDrag.events.onDragStop.add(addTower, this);

        function onDragSprite(sprite) {
            if (sprite.y < 384 || sprite.y > 750) {
                sprite.tint = 0xFF7F50;
            } else {
                sprite.tint = 0xFFFFFF;
            }
        }

        // Caracter selection handler
        function spriteDragStart() {
            tileGroup.forEach(function (tile) {
                tile.alpha = 0.3;
            });
            allies.forEach(function (caracter) {
                caracter.selected = false;
            }, this);
        }

        // i for warriors, j for towers
        var i = 1, j = 1;

        function addWarrior(pointer) {
            if (pointer.y > 384) {
                window['caracter' + i] = new Caracter(((pointer.x / 32) | 0) * 32 + 16, ((pointer.y / 32) | 0) * 32 + 16, i); // Bitwise
                window['caracter' + i].selected = true;
                all.sort('y', Phaser.Group.SORT_ACENDING);
                undo.push({type: 'caracter', name: i});
                i++;
                warriorDrag.x = 16;
                warriorDrag.y = 804;
                warriorDrag.tint = '0xFFFFFF';
                if (i == 6) {
                    warriorDrag.kill();
                    warriorButton.kill();
                    readyCheck();
                }
            } else {
                warriorDrag.x = 16;
                warriorDrag.y = 804;
                warriorDrag.tint = '0xFFFFFF';
            }

            tileGroup.forEach(function (tile) {
                tile.alpha = 0;
            });
        }

        function addTower(pointer) {
            tileGroup.forEach(function (tile) {
                tile.alpha = 0;
            });

            if (pointer.y > 384) {
                window['tower' + j] = new Tower(Math.round(pointer.x / 32) * 32, Math.round(pointer.y / 32) * 32, j, ennemies);
                allies.push(window['tower' + j]);
                all.sort('x', Phaser.Group.SORT_ACENDING);
                all.sort('y', Phaser.Group.SORT_ACENDING);
                map.setObstacle(Math.round(pointer.x / 32) * 32, Math.round(pointer.y / 32) * 32);
                window['tower' + j].arrowAttack;
                undo.push({type: 'tower', name: j});
                j++;
                towerDrag.x = 120;
                towerDrag.y = 812;
                towerDrag.tint = '0xFFFFFF';
                if (j == 3) {
                    readyCheck();
                    towerDrag.kill();
                    towerButton.kill();
                }
            } else {
                towerDrag.x = 120;
                towerDrag.y = 812;
                towerDrag.tint = '0xFFFFFF';
            }
        }

        function wallAction() {
            wallSwitch = !wallSwitch;
            if (wallSwitch) {
                tileGroup.forEach(function (tile) {
                    tile.alpha = 0.3;
                });
                wallButton.tint = '0x00FF00';
                paper.game.input.addMoveCallback(map.buildWall, this);
            } else {
                tileGroup.forEach(function (tile) {
                    tile.alpha = 0;
                });
                wallButton.tint = '0xFFFFFF';
            }
        }

        readyCheck = function () {
            if (wallCount > 13 && i > 5 && j > 2) {
                readyButton = this.add.button(416, 768, 'ready', readyAction);
            }
        }.bind(this);

        // Undo button handleler
        undoButton = this.add.button(350, 770, 'undo', function () {
            if (undo.length > 0) {
                if (readyButton) readyButton.destroy();
                var obj = undo.pop();
                switch (obj.type) {
                    case 'tower':
                        window['tower' + obj.name].destroy();
                        if (!towerDrag.alive) towerDrag.revive();
                        if (!towerButton.alive) towerButton.revive();
                        j--;
                        wallAction();
                        break;
                    case 'walle':
                        window['walle' + obj.name].destroy();
                        if (!wallButton.alive) {
                            wallButton.revive();
                            wallAction();
                        }
                        wallGroup.createMultiple(1, 'walle');
                        wallCount--;
                        break;
                    case 'caracter':
                        window['caracter' + obj.name].destroy();
                        if (!warriorDrag.alive) warriorDrag.revive();
                        if (!warriorButton.alive) warriorButton.revive();
                        i--;
                        wallAction();
                        break;
                }
            }
        });
    },

    update: function () {

        this.physics.arcade.collide(arrows, all);

        if (caracter1)
            caracter1.getFlag();
        if (caracter2)
            caracter2.getFlag();
        if (caracter3)
            caracter3.getFlag();
        if (caracter4)
            caracter4.getFlag();
        if (caracter5)
            caracter5.getFlag();

        if (this.physics.arcade.distanceToXY(theirFlag, 240, 774) < 16) {
            socket.emit('we_have_a_winner', {gameId: gameId});
            var winner = this.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WIN, {
                fill: '#000000',
                font: 'bold 32px Almendra'
            });
            winner.anchor.setTo(0.5);
            paper.game.paused = true;
        }
    }
}
