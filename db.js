var mongo = require('mongodb');
var server = new mongo.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongo.Db('jeopardy', server);