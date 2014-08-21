var express = require('express');
var router = require('./lib/router');
var app = express();

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.listen(10004);