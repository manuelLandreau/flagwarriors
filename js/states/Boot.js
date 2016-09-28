paper = {};

paper.Boot = function() {};

paper.Boot.prototype = {

  create : function()
  {
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  },
}
