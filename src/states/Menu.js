paper.Menu = function () {
};

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
        button.anchor.setTo(0.5);
        langButton.events.onInputDown.add(function () {
            this.game.stateTransition.to('Language');
        }, this);
        if (!user_infos) {
            loginButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 70, lang.CONNECTION, {fill: '#000000', font: 'bold 20px Almendra'});
            paper.game.physics.arcade.enable(loginButton);
            loginButton.inputEnabled = true;
            loginButton.anchor.setTo(0.5);
            loginButton.events.onInputDown.add(function () {
                this.state.start('Login');
            }, this);
        } else {
            logoutButton = this.add.button(400, 8, 'logout', function () {
                this.game.stateTransition.to('Logout');
            }, this);
            logoutButton.scale.setTo(0.20);
            var ratio = ((1/user_infos.defeats*user_infos.victories)*10|0)/10;
            this.userHi = paper.game.add.text(50, 100, lang.HI + user_infos.pseudo, {fill: '#000000', font: 'bold 20px Almendra'});
            this.userRatio = paper.game.add.text(50, 140, lang.RATIO + ratio, {fill: '#000000', font: 'bold 20px Almendra'});
        }

        var soundButton = this.add.button(440, 5, 'sound', function () {
            if (sound) {
                paper.game.sound.stopAll();
                this.play('off');
                sound = false;
                window.localStorage.setItem('sound', 'off');
            } else {
                ambiance.play();
                this.play('on');
                sound = true;
                window.localStorage.setItem('sound', 'on');
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
                this.game.stateTransition.to('Game', true, false);
            }
        }.bind(this));

        button.destroy();
        if (logoutButton) logoutButton.destroy();
        langButton.text = '';
        if (this.userHi) this.userHi.text = '';
        if (this.userRatio) this.userRatio.text = '';
        var waitText = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.WAITING_MENU, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        waitText.anchor.setTo(0.5);
        socket.on('game_on', function () {
            this.game.stateTransition.to('Game', true, false);
        }.bind(this));

        ambiance.stop();
        if (sound)
            start.play();
    }
};
