// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

var gameId = 0;
var flag = true;

io.on('connection', function(socket)
{
    console.log(socket.id);

    socket.on('avalable_player', function(player)
    {
        if (flag) {
            console.log('waiting for a game');
            socket.join(gameId);
            socket.emit('game_id', {for: socket.id, gameId: gameId, gameOn: false});
            flag = !flag;
        } else {
            console.log('game on !');
            socket.join(gameId);
            socket.emit('game_id', {for: socket.id, gameId: gameId, gameOn: true});
            socket.to(gameId).emit('game_on');
            flag = !flag;
            gameId++
        }
    });

    socket.on('ready', function(data) {
        socket.broadcast.to(data.gameId).emit('ready', data);
    });

    socket.on('walls', function(data) {
        socket.broadcast.to(data.gameId).emit('walls', data);
    });

    socket.on('is_moving', function(data) {
        socket.broadcast.to(data.gameId).emit('is_moving', data);
    });

    socket.on('attack', function(data) {
        socket.broadcast.to(data.gameId).emit('attack', data);
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        console.log('disconnected');
        /*if (addedUser) {
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.to(data.gameId).emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }*/
    });

    app.use('/', express.static('../'));
});
