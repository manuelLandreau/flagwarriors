paper.Login = function () {
};

paper.Login.prototype = {

    create: function () {

        var background = this.add.image(0, 0, 'paper');
        paper.game.msg = '';

        $('.form').toggle();

        var backButton = paper.game.add.text(400, 740, lang.RETURN, {fill: '#000000', font: 'bold 24px Almendra'});
        backButton.inputEnabled = true;
        backButton.anchor.setTo(0.5);
        backButton.events.onInputDown.add(function () {
            this.game.stateTransition.to('Menu');
            $('.form').toggle();
        }, this);
    }
};
