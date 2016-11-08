paper.Language = function () {
};

paper.Language.prototype = {

    create: function () {

        var background = this.add.image(0, 0, 'paper');
        paper.game.msg = '';

        var backButton = paper.game.add.text(400, 740, lang.RETURN, {fill: '#000000', font: 'bold 24px Almendra'});
        backButton.inputEnabled = true;
        backButton.anchor.setTo(0.5);
        backButton.events.onInputDown.add(function () {
            this.game.stateTransition.to('Menu');
        }, this);

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

        var frButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY - 50, lang.FR, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        paper.game.physics.arcade.enable(frButton);
        frButton.inputEnabled = true;
        frButton.anchor.setTo(0.5);
        frButton.events.onInputDown.add(function () {
            frButton.text = '<' + lang.FR + '>';
            enButton.text = lang.EN;
            esButton.text = lang.ES;
            window.localStorage.setItem('lang', 'fr');
            lang = fr;
        }, this);

        var enButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.EN, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        paper.game.physics.arcade.enable(enButton);
        enButton.inputEnabled = true;
        enButton.anchor.setTo(0.5);
        enButton.events.onInputDown.add(function () {
            enButton.text = '<' + lang.EN + '>';
            frButton.text = lang.FR;
            esButton.text = lang.ES;
            window.localStorage.setItem('lang', 'en');
            lang = en;
        }, this);

        var esButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY + 50, lang.ES, {
            fill: '#000000',
            font: 'bold 32px Almendra'
        });
        paper.game.physics.arcade.enable(esButton);
        esButton.inputEnabled = true;
        esButton.anchor.setTo(0.5);
        esButton.events.onInputDown.add(function () {
            esButton.text = '<' + lang.ES + '>';
            frButton.text = lang.FR;
            enButton.text = lang.EN;
            window.localStorage.setItem('lang', 'es');
            lang = es;
        }, this);

        if (window.localStorage.getItem("lang") != null) {
            if (window.localStorage.getItem("lang") == 'fr') frButton.text = '<' + lang.FR + '>';
            if (window.localStorage.getItem("lang") == 'es') esButton.text = '<' + lang.ES + '>';
            if (window.localStorage.getItem("lang") == 'en') enButton.text = '<' + lang.EN + '>';
        } else {
            enButton.text = '<' + lang.EN + '>';
        }
    }
};
