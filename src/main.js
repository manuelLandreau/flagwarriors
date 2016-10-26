var gameId, lang, sound;

if (sessionStorage['lang'] != 'undefined') {
    if ( sessionStorage.lang == 'fr ') {
        lang = fr;
    } else {
        lang = en;
    }
} else {
    lang = en;
}

if (sessionStorage['sound'] != 'undefined') {
    if (sessionStorage.sound  == 'on') {
        sound = true;
    } else {
        sound = false;
    }
} else {
    sound = true;
}

paper.game = new Phaser.Game(480, 800, Phaser.AUTO, '', null, false, false);
paper.game.state.add('Preload', paper.Preload);
paper.game.state.add('Menu', paper.Menu);
paper.game.state.add('Language', paper.Language);
paper.game.state.add('Game', paper.Game);
paper.game.state.add('GameOver', paper.GameOver);
paper.game.state.start('Preload');
paper.game.msg = '';