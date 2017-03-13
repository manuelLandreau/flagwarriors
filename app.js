// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

app.use('/', express.static('./'));

