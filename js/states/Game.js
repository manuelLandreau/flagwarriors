var map, newPos, allies, wallGroup, tileGroup, arrowGroup, alliesTower, wallSwitch = false;
var i = 1, j = 1;
var caracter1, caracter2, caracter3, caracter4, caracter5, ennemy1, tower1, tower2;
var ready = false, ennemyInit= false, ourFlag, theirFlag, wallCount = 0;;

paper.Game = function(){};

paper.Game.prototype = {

    preload : function()
    {
    },

    create : function(){

        var background = this.add.image(0, 0, 'background');
        //tile map
        tileGroup = this.add.group();
        map = new Map(this, tileGroup);
        map.spawnTiles();
        //groups
        wallGroup = this.add.group();
        wallGroup.sort();
        allies = this.add.group();
        ennemies = this.add.group();
        arrowGroup = this.add.group();
        alliesTower = this.add.group();
        this.physics.arcade.collide(wallGroup, allies);
        if (actionWall)
            this.input.addMoveCallback(buildWall, this);
        //buttons
        warriorButton = this.add.image(-16, 630, 'warrior');
        warriorButton.scale.setTo(2);
        wallButton = this.add.button(33, 644, 'walle', actionWall, this, 1, 0, 2);
        towerButton = this.add.image(70, 644, 'tower');

        //button drag
        warriorDrag = this.add.image(16, 660, 'warrior');
        warriorDrag.anchor.setTo(0.5, 0.5);
        warriorDrag.scale.setTo(2);
        warriorDrag.inputEnabled = true;
        warriorDrag.input.enableDrag();
        warriorDrag.events.onDragStart.add(unselect, this);
        warriorDrag.events.onDragStop.add(addWarrior, this);
        towerDrag = this.add.image(94, 684, 'tower');
        towerDrag.anchor.setTo(0.5, 0.5);
        towerDrag.inputEnabled = true;
        towerDrag.input.enableDrag();
        towerDrag.events.onDragStart.add(unselect, this);
        towerDrag.events.onDragStop.add(addTower, this);

        function unselect()
        {
            allies.forEach(function(caracter) {
                caracter.selected = false;
            }, this);
        }

        function addWarrior(pointer)
        {
            switch(i) {
                case 1:
                    caracter1 = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, '1');
                    caracter1.selected = true;
                    allies.add(caracter1);
                    break;
                case 2:
                    caracter2 = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, '2');
                    caracter2.selected = true;
                    allies.add(caracter2);
                    break;
                case 3:
                    caracter3 = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, '3');
                    caracter3.selected = true;
                    allies.add(caracter3);
                    break;
                case 4:
                    caracter4 = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, '4');
                    caracter4.selected = true;
                    allies.add(caracter4);
                    break;
                case 5:
                    caracter5 = new Caracter(Math.floor(pointer.x / 32)*32+16, Math.floor(pointer.y / 32)*32+16, '5');
                    caracter5.selected = true;
                    allies.add(caracter5);
                    break;
            }
            i++;
            warriorDrag.x = 16;
            warriorDrag.y = 662;
            if (i==6) {
                warriorDrag.kill();
                warriorButton.kill();
                readyCheck();
            }
        }

        function addTower(pointer)
        {
            switch(j) {
                case 1:
                    tower1 = new Tower(Math.floor(pointer.x / 32)*32, Math.floor(pointer.y / 32)*32-16, '1', ennemies);
                    this.physics.arcade.enable(tower1);
                    allies.add(tower1);
                    allies.sort('x', Phaser.Group.SORT_ACENDING);
                    allies.sort('y', Phaser.Group.SORT_ACENDING);
                    tower1.body.immovable = true;
                    map.setObstacle(Math.floor(pointer.x / 32)*32, Math.floor(pointer.y / 32)*32);
                    tower1.attack();
                    break;
                case 2:
                    tower2 = new Tower(Math.floor(pointer.x / 32)*32, Math.floor(pointer.y / 32)*32-16, '2', ennemies);
                    this.physics.arcade.enable(tower2);
                    allies.add(tower2);
                    allies.sort('x', Phaser.Group.SORT_ACENDING);
                    allies.sort('y', Phaser.Group.SORT_ACENDING);
                    tower2.body.immovable = true;
                    map.setObstacle(Math.floor(pointer.x / 32)*32, Math.floor(pointer.y / 32)*32);
                    break;
            }
            j++;
            towerDrag.x = 94;
            towerDrag.y = 684;
            if (j == 3) {
                readyCheck();
                towerDrag.kill();
                towerButton.kill();
            }
        }

        function actionWall()
        {
            wallSwitch = !wallSwitch;
        }

        readyCheck = function() {
            if (i > 4, j > 2, wallCount > 13)
                readyButton = this.add.button(448, 640, 'ready', readyAction, this, 1, 0, 2);
        }.bind(this);
    },

    update : function()
    {
        if (caracter1)
            caracter1.move();

        if (caracter2) {
            caracter2.move();
        }
        if (caracter3) {
            caracter3.move();
        }
        if (caracter4) {
            caracter4.move();
        }
        if (caracter5) {
            caracter5.move();
        }
        paper.game.physics.arcade.overlap(arrowGroup, ennemies, function(arrow, ennemy) {
            arrow.kill();
            socket.emit('attack', {name: ennemy.name, damage: paper.game.rnd.integerInRange(0.5, 0.1)});
        }, null, this);
    }
}
