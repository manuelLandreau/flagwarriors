paper.Language = function () {
};

paper.Language.prototype = {

    create: function () {

        var background = this.add.image(0, 0, 'paper');

        var backButton = paper.game.add.text(400, 740, lang.RETURN, {fill: '#000000', font: 'bold 24px Almendra'});
        backButton.inputEnabled = true;
        backButton.anchor.setTo(0.5);
        backButton.events.onInputDown.add(function () {
            this.state.start('Menu');
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

        var frButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY - 50, lang.FR, {fill: '#000000', font: 'bold 32px Almendra'});
        paper.game.physics.arcade.enable(frButton);
        frButton.inputEnabled = true;
        frButton.anchor.setTo(0.5);
        frButton.events.onInputDown.add(function () {
            frButton.text = '<' + lang.FR + '>';
            enButton.text = lang.EN;
            sessionStorage.setItem('lang', 'fr');
            lang = fr;
        }, this);

        var enButton = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.EN, {fill: '#000000', font: 'bold 32px Almendra'});
        paper.game.physics.arcade.enable(enButton);
        enButton.inputEnabled = true;
        enButton.anchor.setTo(0.5);
        enButton.events.onInputDown.add(function () {
            enButton.text = '<' + lang.EN + '>';
            frButton.text = lang.FR;
            sessionStorage.setItem('lang', 'en');
            lang = en;
        }, this);

        if (sessionStorage.getItem("lang") != null) {
            sessionStorage.getItem("lang") == 'fr' ? frButton.text = '<' + lang.FR + '>' : enButton.text = '<' + lang.EN + '>';
        } else {
            enButton.text = '<' + lang.EN + '>';
        }
    }
}
