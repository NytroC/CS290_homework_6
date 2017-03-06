var http = require('http');
var my_db = require('./db');
var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendfile(path.join(_dirname + '/public/index.html'));
});