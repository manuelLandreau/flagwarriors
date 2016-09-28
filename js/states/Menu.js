paper.Menu = function() {};

paper.Menu.prototype = {

  create : function()
  {
  	var background = this.add.image(0, 0, 'background');
  	var button = this.add.button(120, 300, 'start', this.start, this, 1, 0, 2);
  },

  start: function()
  {
      socket.emit('avalable_player');

      socket.on('game_id', function(data) {
          console.log('game id: ' + data.gameId);
          gameId = data.gameId;
          if (data.gameOn) {
              this.state.start('Game');
          }
      }.bind(this));

      socket.on('game_on', function() {
          this.state.start('Game');
      }.bind(this));
  }
}
