try {
    socket = io.connect('https://flagwarriors.herokuapp.com');
} catch (e) {
    paper.game.msg = lang.NO_CONNECTION;
    gameId = false;
}
var ennemyData = false;

function readyAction(readyButton) {
    readySwitch = true;
    tileGroup.removeAll();
    readyButton.destroy();
    undoButton.destroy();
    socket.emit('ready', {
            warriors: [
                {x: caracter1.x, y: caracter1.y, name: '1'},
                {x: caracter2.x, y: caracter2.y, name: '2'},
                {x: caracter3.x, y: caracter3.y, name: '3'},
                {x: caracter4.x, y: caracter4.y, name: '4'},
                {x: caracter5.x, y: caracter5.y, name: '5'}
            ],
            towers: [
                {x: tower1.x, y: tower1.y, name: '1'},
                {x: tower2.x, y: tower2.y, name: '2'}
            ],
            walls: wallsArray,
            gameId: gameId
        }
    );

    if (ennemyData) {
        addEnnemies(ennemyData);
    } else {
        paper.game.waitText1 = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY - 32, lang.WAITING_READY, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        paper.game.waitText1.anchor.setTo(0.5);
    }
}

socket.on('ready', function (data) {
    ennemyData = data;
    if (readySwitch) {
        addEnnemies(ennemyData);
        ennemyData = false;
    }

    if (paper.game.waitText1)
        paper.game.waitText1.destroy();

    if (paper.game.waitText2)
        paper.game.waitText2.destroy();

    gameOn = true;
});

function addEnnemies(data) {
    undoButton.destroy();
    readyButton.destroy();
    data.warriors.forEach(function (warrior) {
        window['ennemy' + warrior.name] = new Ennemy(480 - warrior.x, 800 - warrior.y, warrior.name);
        ennemies.push(window['ennemy' + warrior.name]);
        all.add(window['ennemy' + warrior.name]);
    });

    data.towers.forEach(function (tower) {
        window['ennemyTower' + tower.name] = new Tower(480 - tower.x, 800 - tower.y, tower.name, allies);
        // ennemies.push(window['ennemyTower' + tower.name]); // Later
        all.add(window['ennemyTower' + tower.name]);
        map.setObstacle(window['ennemyTower' + tower.name].x, window['ennemyTower' + tower.name].y);
    });

    data.walls.forEach(function (wall) {
        window['wallen' + wall.name] = paper.game.add.sprite(480 - wall.x, 800 - wall.y, 'walle');
        paper.game.physics.arcade.enable(window['wallen' + wall.name]);
        window['wallen' + wall.name].anchor.setTo(0.5, 0.5);
        // ennemies.push(window['wallen' + tower.name]); // Later
        all.add(window['wallen' + wall.name]);
        ennemies.sort('x', Phaser.Group.SORT_ACENDING);
        ennemies.sort('y', Phaser.Group.SORT_ACENDING);
        window['wallen' + wall.name].body.immovable = true;
        map.setObstacle(480 - wall.x, 800 - wall.y);
    });

    theirFlag = paper.game.add.sprite(240, 0, 'flags');
    theirFlag.scale.setTo(2);
    theirFlag.anchor.setTo(0.5, 0.5);
    theirFlag.animations.add('float', [9, 10, 11, 12]);
    theirFlag.animations.play('float', 5, true);
    all.add(theirFlag);

    socket.on('is_moving', function (data) {
        window['ennemy' + data.name].newPosX = Math.abs(480 - data.nextx);
        window['ennemy' + data.name].newPosY = Math.abs(800 - data.nexty);
    });

    socket.on('set_obstacle', function (data) {
        map.caracterObstacle(16 - data.y, 54 - data.x, data.value);
    });

    socket.on('attack', function (data) {
        window['caracter' + data.name].damage(data.damage);
    });

    socket.on('got_flag', function (data) {
        ourFlag.x = window['ennemy' + data.name].x;
        ourFlag.y = window['ennemy' + data.name].y - 24;
    });

    socket.on('death', function (data) {
        window['ennemy' + data.name].kill();
    });

    socket.on('we_have_a_winner', function () {
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

    });

    socket.on('we_have_a_looser', function () {
        var winner = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WIN, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        winner.anchor.setTo(0.5);
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
    });
}

