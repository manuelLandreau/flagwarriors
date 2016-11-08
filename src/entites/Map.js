var Map = function (game, group) {

    this.game = game;
    this.group = group;

    wallGroup = paper.game.add.group();
    wallGroup.createMultiple(14, 'walle');
    wallGroup.forEach(function (wall) {
        wall.anchor.setTo(0.33, 0.5);
    });

    this.grid = [];
    for (var i = 0; i < 54; i++) {
        var t = [];
        for (var j = 0; j < 16; j++) {
            t.push(0);
        }
        this.grid.push(t);
    }

    this.spawnTiles = function () {
        for (var xt = 0; xt < 16 * 32; xt += 32) {
            for (var yt = 400; yt < 54 * 16; yt += 16) {
                var tile = this.game.add.image(xt, yt, 'grid', 0, this.group);
                tile.anchor.setTo(0.5);
                tile.alpha = 0;
                tile.inputEnabled = true;
                tile.walled = false;
            }
        }
    }.bind(this);

    this.setObstacle = function (tileY, tileX) {
        this.grid[tileX / 16][tileY / 32] = 1;
    }.bind(this);

    this.caracterObstacle = function (tileY, tileX, nb) {
        this.grid[tileX][tileY] = nb;
    }.bind(this);

    this.buildWall = function (pointer) {
        tileGroup.forEach(function (tile) {
            tile.events.onInputOver.add(makeWall, this);
            function makeWall(tile, x, y) {
                if (wallSwitch && wallCount > 13) {
                    wallButton.kill();
                    readyCheck();
                    wallSwitch = false;
                    tileGroup.forEach(function(tile) {
                        tile.alpha = 0;
                    });
                }
                if (wallCount < 14 && pointer.isDown && wallSwitch == true) {
                    if (tile.walled == false && tile.y > 384 && tile.y < 752) {
                        window['walle' + wallCount] = wallGroup.getFirstExists(false);
                        window['walle' + wallCount].reset(tile.x, tile.y);
                        wallGroup.remove(window['walle' + wallCount]);
                        all.add(window['walle' + wallCount]);
                        all.sort('x', Phaser.Group.SORT_ACENDING);
                        all.sort('y', Phaser.Group.SORT_ACENDING);
                        undo.push({type: 'walle', name: wallCount});
                        // allies.push(window['walle' + wallCount]); // Later
                        wallCount++;
                        tile.walled = true;
                        map.setObstacle(tile.x, tile.y);
                        wallsArray.push({x: tile.x, y: tile.y, name: wallCount});
                    }
                }
            }
        });
    };
};

Map.prototype = Object.create(Phaser.Sprite.prototype);
Map.prototype.constructor = Map;
