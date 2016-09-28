function readyAction() {
    socket.emit('ready', {
        caracter1x: caracter1.x, caracter1y: caracter1.y,
        caracter2x: caracter2.x, caracter2y: caracter2.y,
        caracter3x: caracter3.x, caracter3y: caracter3.y,
        caracter4x: caracter4.x, caracter4y: caracter4.y,
        caracter5x: caracter5.x, caracter5y: caracter5.y,
        tower1x: tower1.x, tower1y: tower1.y,
        tower2x: tower2.x, tower2y: tower2.y
    });

    wallGroup.forEach(function(wall) {
        socket.emit('walls', {x: wall.x, y: wall.y});
    })

    ennemyInit();
    ready = true;
    ourFlag = this.add.sprite(240, 640, 'flags');
    ourFlag.scale.setTo(2);
    ourFlag.animations.add('float', [4, 5, 6, 7]);
    ourFlag.animations.play('float', 5, true);
}

function ennemyInit() {
    socket.on('ready', function(data) {
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
        towerEnnemy1 = new tower(480 - data.tower1x, 672 - data.tower1y, '1', allies);
        ennemies.add(towerEnnemy1);
        towerEnnemy2 = new tower(480 - data.tower2x, 672 - data.tower2y, '1', allies);
        ennemies.add(towerEnnemy2);
        ennemyInit = true;
        theirFlag = paper.game.add.sprite(240, 16, 'flags');
        theirFlag.scale.setTo(2);
        theirFlag.animations.add('float', [4, 5, 6, 7]);
        theirFlag.animations.play('float', 5, true);
    });

    socket.on('walls', function(data) {
        var walle = paper.game.add.sprite(480 - data.x, 672 - data.y, 'walle');
        paper.game.physics.arcade.enable(walle);
        ennemies.add(walle);
        ennemies.sort('x', Phaser.Group.SORT_ACENDING);
        ennemies.sort('y', Phaser.Group.SORT_ACENDING);
        walle.body.immovable = true;
        map.setObstacle(480 - data.x, 672 - data.y);
    });

    socket.on('is_moving', function(data) {
        window['ennemy' + data.name].x = 480 - data.x;
        window['ennemy' + data.name].y = 672 - data.y;
        window['ennemy' + data.name].animations.play(data.anim, 10, false);
    });

    socket.on('attack', function(data) {
        window['ennemy' + data.name].damage(data.damage);
        window['ennemy' + data.name].animations.play('attack', 10, false);
    });

}
