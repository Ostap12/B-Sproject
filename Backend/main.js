 var express = require('express');
 var path = require('path'):
 var morgan = require('morgan');
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 function configureEndpoints(app){
     var db = require('./db');
 }

function startServer(port){
    var app = express();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view enginse', 'ejs');

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: false 
    }));
    app.use(bodyParser.json());

    configureEndpoints(app);

    app.listen(port, function() {
        console.log('BSApplication Running on http://localhost:' + port+ '/');
    });
}

exports.startServer  = startServer;


