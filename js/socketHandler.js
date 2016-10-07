socket = io.connect('http://192.168.0.12:3000');
var ennemyData = false, readySwitch = false;

function readyAction() {
    tileGroup.removeAll();
    socket.emit('ready', {
        caracter1x: caracter1.x, caracter1y: caracter1.y,
        caracter2x: caracter2.x, caracter2y: caracter2.y,
        caracter3x: caracter3.x, caracter3y: caracter3.y,
        caracter4x: caracter4.x, caracter4y: caracter4.y,
        caracter5x: caracter5.x, caracter5y: caracter5.y,
        tower1x: tower1.x, tower1y: tower1.y,
        tower2x: tower2.x, tower2y: tower2.y,
        gameId: gameId
    });

    readySwitch = true;

    if (ennemyData)
        addEnnemies(ennemyData);

    ourFlag = this.add.sprite(240, 640, 'flags');
    ourFlag.scale.setTo(2);
    ourFlag.animations.add('float', [4, 5, 6, 7]);
    ourFlag.animations.play('float', 5, true);

    // wallGroup.forEach(function(wall) {
    //     socket.emit('walls', {x: wall.x, y: wall.y});
    // })
}

socket.on('ready', function(data) {
    ennemyData = data;
    if (readySwitch) {
        addEnnemies(ennemyData);
        ennemyData = false;
    }
});

function addEnnemies(data) {

    ennemy1 = new Ennemy(480 - data.caracter1x, 672 - data.caracter1y, '1');
    ennemies.add(ennemy1);

    ennemy2 = new Ennemy(480 - data.caracter2x, 672 - data.caracter2y, '2');
    ennemies.add(ennemy2);

    ennemy3 = new Ennemy(480 - data.caracter3x, 672 - data.caracter3y, '3');
    ennemies.add(ennemy3);

    ennemy4 = new Ennemy(480 - data.caracter4x, 672 - data.caracter4y, '4');
    ennemies.add(ennemy4);

    ennemy5 = new Ennemy(480 - data.caracter5x, 672 - data.caracter5y, '5');
    ennemies.add(ennemy5);

    ennemyTower1 = new Tower(480 - data.tower1x, 672 - data.tower1y, '1', allies);
    ennemies.add(ennemyTower1);
    map.setObstacle(ennemyTower1.x, ennemyTower1.y);

    ennemyTower2 = new Tower(480 - data.tower2x, 672 - data.tower2y, '1', allies);
    ennemies.add(ennemyTower2);
    map.setObstacle(ennemyTower2.x, ennemyTower2.y);

    theirFlag = paper.game.add.sprite(240, 16, 'flags');
    theirFlag.scale.setTo(2);
    theirFlag.animations.add('float', [4, 5, 6, 7]);
    theirFlag.animations.play('float', 5, true);

    socket.on('is_moving', function(data) {
        window['ennemy' + data.name].newPosX = Math.abs(480 - data.nextx);
        window['ennemy' + data.name].newPosY = Math.abs(672 - data.nexty);
    });

    socket.on('death', function(data) {
        var skeleton = paper.game.add.sprite(window['ennemy' + data.name].x, window['ennemy' + data.name].y, 'skeleton');
        window['ennemy' + data.name].destroy();

        skeleton.animations.add('death', [40,41,42,43,44,45,46,47,48,49]);
        skeleton.animations.play('death', 10, false);

    });
}

// socket.on('walls', function(data) {
//     var walle = paper.game.add.sprite(480 - data.x, 672 - data.y, 'walle');
//     paper.game.physics.arcade.enable(walle);
//     ennemies.add(walle);
//     ennemies.sort('x', Phaser.Group.SORT_ACENDING);
//     ennemies.sort('y', Phaser.Group.SORT_ACENDING);
//     walle.body.immovable = true;
//     map.setObstacle(480 - data.x, 672 - data.y);
// });

socket.on('attack', function(data) {
    window['ennemy' + data.name].damage(data.damage);
    window['ennemy' + data.name].animations.play('attack', 10, false);
});
