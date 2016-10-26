paper.Menu = function () {
};
var button, start, ambiance, langButton, soundFlag = true;

paper.Menu.prototype = {

    create: function () {
        var background = this.add.image(0, 0, 'paper');
        if (soundFlag)
            ambiance = this.add.audio('ambiance');
        start = this.add.audio('start');
        if (sound && soundFlag)
            ambiance.play();
        soundFlag = false;
        button = this.add.button(paper.game.world.centerX, paper.game.world.centerY, 'start', this.start, this);
        button.anchor.setTo(0.5);
        var msg = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 100, paper.game.msg, {fill: '#000000'});
        msg.anchor.setTo(0.5);

        langButton = paper.game.add.text(10, 7, lang.LANGUAGE, {fill: '#000000', font: 'bold 20px Almendra'});
        paper.game.physics.arcade.enable(langButton);
        langButton.inputEnabled = true;
        langButton.events.onInputDown.add(function () {
            this.state.start('Language');
        }, this);

        var soundButton = this.add.button(440, 5, 'sound', function () {
            if (sound) {
                paper.game.sound.stopAll();
                this.play('off');
                sound = false;
                sessionStorage.setItem('sound', 'off');
            } else {
                ambiance.play();
                this.play('on');
                sound = true;
                sessionStorage.setItem('sound', 'on');
            }

        }, soundButton);

        soundButton.animations.add('on', [0]);
        soundButton.animations.add('off', [1]);

        if (sound) {
            soundButton.play('on');
        } else {
            soundButton.play('off');
        }
    },

    start: function () {
        socket.emit('avalable_player');

        socket.on('game_id', function (data) {
            console.log('game id: ' + data.gameId);
            gameId = data.gameId;
            if (data.gameOn) {
                this.state.start('Game');
            }
        }.bind(this));

        button.destroy();
        langButton.text = "";
        var waitText = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WAITING_MENU, {fill: '#000000', font: 'bold 32px Almendra'});
        waitText.anchor.setTo(0.5);
        socket.on('game_on', function () {
            this.state.start('Game');
        }.bind(this));

        ambiance.stop();
        if (sound)
            start.play();
    }
}
