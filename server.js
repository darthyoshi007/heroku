var express = require('express');
var app = express();
var Firebase = require("firebase");
var server = require('http').createServer(app);

server.listen(8080, function() {
    return console.log('Server listening at port 8080');
});
