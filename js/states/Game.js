var map, ennemies, allies, tileGroup, arrowGroup, wallSwitch = false;
var caracter1, caracter2, caracter3, caracter4, caracter5, tower1, tower2;
var ennemy1, ennemy2, ennemy3, ennemy4, ennemy5, ennemyTower1, ennemyTower2;
var wallCount = 0, wallButton;
var theirFlag, ourFlag, readyCheck;

paper.Game = function() {};

paper.Game.prototype = {

    create: function() {

        var background = this.add.image(0, 0, 'background');

        //tile map
        tileGroup = this.add.group();
        map = new Map(this, tileGroup);
        map.spawnTiles();

        //groups
        allies = this.add.group();
        ennemies = this.add.group();
        arrowGroup = this.add.group();

        //buttons
        var warriorButton = this.add.image(-16, 644, 'warrior');
        warriorButton.scale.setTo(2);
        wallButton = this.add.button(49, 644, 'walle', wallAction, this, 1, 0, 2);
        var towerButton = this.add.image(96, 644, 'tower');

        // Drag buttons
        var warriorDrag = this.add.image(16, 676, 'warrior');
        warriorDrag.anchor.setTo(0.5, 0.5);
        warriorDrag.scale.setTo(2);
        warriorDrag.inputEnabled = true;
        warriorDrag.input.enableDrag();
        warriorDrag.events.onDragStart.add(unselect, this);
        warriorDrag.events.onDragStop.add(addWarrior, this);

        var towerDrag = this.add.image(120, 684, 'tower');
        towerDrag.anchor.setTo(0.5, 0.5);
        towerDrag.inputEnabled = true;
        towerDrag.input.enableDrag();
        towerDrag.events.onDragStart.add(unselect, this);
        towerDrag.events.onDragStop.add(addTower, this);

        // Caracter selection handler
        function unselect() {
            allies.forEach(function(caracter) {
                caracter.selected = false;
            }, this);
        }

        // i for warriors, j for towers
        var i = 1, j = 1;

        function addWarrior(pointer) {
            window['caracter' + i] = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, i);
            window['caracter' + i].selected = true;
            allies.add(window['caracter' + i]);

            i++;
            warriorDrag.x = 16;
            warriorDrag.y = 676;
            if (i==6) {
                warriorDrag.kill();
                warriorButton.kill();
                readyCheck();
            }
        }

        function addTower(pointer) {
            window['tower' + j] = new Tower(Math.round(pointer.x / 32)*32, Math.round(pointer.y / 32)*32, j, ennemies);
            allies.add(window['tower' + j]);
            allies.sort('x', Phaser.Group.SORT_ACENDING);
            allies.sort('y', Phaser.Group.SORT_ACENDING);
            map.setObstacle(Math.round(pointer.x / 32)*32, Math.round(pointer.y / 32)*32);
            window['tower' + j].attack();
            j++;
            towerDrag.x = 120;
            towerDrag.y = 684;
            if (j == 3) {
                readyCheck();
                towerDrag.kill();
                towerButton.kill();
            }
        }

        function wallAction() {
            wallSwitch = !wallSwitch;
            if (wallSwitch)
                this.input.addMoveCallback(buildWall, this);
        }

        var readyButton = this.add.button(448, 640, 'ready', readyAction, this, 1, 0, 2);

        readyCheck = function() {
            if (i > 4 && j > 2 && wallCount > 13){}
        }.bind(this);
    },

    update : function() {
        if (caracter1) {
            caracter1.attack();
        }
        if (caracter2) {
            caracter2.attack();
        }
        if (caracter3) {
            caracter3.attack();
        }
        if (caracter4) {
            caracter4.attack();
        }
        if (caracter5) {
            caracter5.attack();
        }
        if (ennemy1) {
            ennemy1.attack();
        }
        if (ennemy2) {
            ennemy2.attack();
        }
        if (ennemy3) {
            ennemy3.attack();
        }
        if (ennemy4) {
            ennemy4.attack();
        }
        if (ennemy5) {
            ennemy5.attack();
        }
        paper.game.physics.arcade.overlap(
            arrowGroup,
            ennemies,
            function(arrow, ennemy) {
                arrow.kill();
                socket.emit('attack', {name: ennemy.name, damage: paper.game.rnd.integerInRange(0.5, 0.1), gameId: gameId});
            }, null, this);
    }
}
