paper.Logout = function () {
};

paper.Logout.prototype = {

    create: function () {

        var background = this.add.image(0, 0, 'paper');
        paper.game.msg = '';

        var sure = paper.game.add.text(paper.game.world.centerX, paper.game.world.centerY, lang.SURE, {
            fill: '#000000',
            font: 'bold 24px Almendra'
        });
        sure.anchor.setTo(0.5);
        var yes = paper.game.add.text(paper.game.world.centerX - 30, paper.game.world.centerY + 30, lang.YES, {
            fill: '#000000',
            font: 'bold 20px Almendra'
        });
        var no = paper.game.add.text(paper.game.world.centerX + 30, paper.game.world.centerY + 30, lang.NO, {
            fill: '#000000',
            font: 'bold 20px Almendra'
        });
        yes.inputEnabled = true;
        yes.anchor.setTo(0.5);
        yes.events.onInputDown.add(function () {
            window.localStorage.removeItem('jtw');
            user_infos = false;
            this.game.stateTransition.to('Menu');
        }, this);
        no.inputEnabled = true;
        no.anchor.setTo(0.5);
        no.events.onInputDown.add(function () {
            this.game.stateTransition.to('Menu');
        }, this);
    }
};
