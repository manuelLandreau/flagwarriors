// Large scoped variable
var gameId, lang = en, sound = true, deadWarior = 1;
var map, all, wallGroup, ennemies, allies, tileGroup, arrows, wallSwitch = false;
var caracter1, caracter2, caracter3, caracter4, caracter5, tower1, tower2;
var ennemy1, ennemy2, ennemy3, ennemy4, ennemy5, ennemyTower1, ennemyTower2, explosions;
var wallCount = 0, wallButton, wallsArray = [], undo = [], sword1, sword2, pare;
var theirFlag = {x: 0, y: 0}, ourFlag, readyCheck, readyButton = false, undoButton, readySwitch = false, gameOn = false;
var button, loginButton, logoutButton, start, ambiance, langButton, soundFlag = true, user_infos = false;

if (window.localStorage.getItem('lang') != null) {
    if (window.localStorage.getItem('lang') == 'fr') {
        lang = fr;
    } else if (window.localStorage.getItem('lang') == 'es') {
        lang = es;
    } else {
        lang = en;
    }
}

if (window.localStorage.getItem('sound') != null) {
    if (window.localStorage.getItem('sound') == 'on') {
        sound = true;
    } else {
        sound = false;
    }
}

if (window.localStorage.getItem('jtw') != null) {
    var body = {
        token: window.localStorage.getItem('jtw')
    };
    $.ajax({
        url: 'http://127.0.0.1:3000/refresh',
        type: 'POST',
        data: body,
        success: function (data) {
            user_infos = data.infos;
            window.localStorage.setItem('jtw', data.id_token);
        },
        error: function (err) {
        }
    });
}

paper.game = new Phaser.Game(480, 800, Phaser.AUTO, '', null, false, false); // 1440, 2400
paper.game.state.add('Preload', paper.Preload);
paper.game.state.add('Menu', paper.Menu);
paper.game.state.add('Language', paper.Language);
paper.game.state.add('Login', paper.Login);
paper.game.state.add('Logout', paper.Logout);
paper.game.state.add('Game', paper.Game);
paper.game.state.add('GameOver', paper.GameOver);
paper.game.state.start('Preload');
paper.game.msg = '';