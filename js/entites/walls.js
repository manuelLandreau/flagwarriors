function buildWall(pointer) {

  tileGroup.forEach(function (tile)
  {
    tile.events.onInputOver.add(makeWall, this);
    function makeWall(tile, x, y) {
      if (wallCount > 13) {
        wallButton.kill();
        wallSwitch = false;
        readyCheck();
      }
      if (wallCount < 14 && pointer.isDown && wallSwitch == true) {
        if (tile.walled == false && tile.y > 336) {
          var walle = paper.game.add.sprite(tile.x, tile.y, 'walle');
          paper.game.physics.arcade.enable(walle);
          allies.add(walle);
          allies.sort('x', Phaser.Group.SORT_ACENDING);
          allies.sort('y', Phaser.Group.SORT_ACENDING);
          walle.body.immovable = true;
          wallCount++;
          tile.walled = true;
          map.setObstacle(tile.x, tile.y);
        }
      }
    }
  });
}
