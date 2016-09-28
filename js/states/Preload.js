paper.Preload = function()
{
   this.loadtext;
};

paper.Preload.prototype = {

  create : function()
  {
    this.loadText = this.add.text(paper.game.world.centerX/2, paper.game.world.centerY, 'Chargement...', { fill: '#ffffff' });
    this.load.onFileComplete.add(this.fileComplete, this);
    this.load.onLoadComplete.add(this.loadComplete, this);

    this.startLoad();
  },

  startLoad: function()
  {
    this.load.image('warriorButton', 'assets/warriorbutton.png');
    this.load.image('wallButton', 'assets/walle.png');
    this.load.image('towerButton', 'assets/towerbutton.png');
    this.load.image('tree', 'assets/tree.png');
    this.load.spritesheet('warrior', 'assets/warrior.png', 32, 32);
    this.load.spritesheet('flags', 'assets/flags.png', 16, 16);
    this.load.image('walle', 'assets/wall2.png');
    this.load.image('tile', 'assets/empty.png');
    this.load.image('tower', 'assets/tower.png');
    this.load.image('arrow', 'assets/arrow.png');
    this.load.image("background", "assets/grass.jpg");
    this.load.image('start', 'assets/start.png');
    this.load.image('ready', 'assets/contour.png');


    this.load.start();
  },

  fileComplete: function ( progress, cacheKey, success, totalLoaded, totalFiles)
  {
    this.loadText.setText("Chargement " + progress + "%");
  },

  loadComplete : function()
  {
    this.state.start('Menu');
  }
}
