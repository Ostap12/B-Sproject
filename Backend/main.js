 var express = require('express');
 var path = require('path');
 var morgan = require('morgan');
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 function configureEndpoints(app){
     // Get db.js where connection with database is established
     var db = require('./db');
     app.post('/db/create_department/', db.create_department);
     app.get('/db/show_all_departments/', db.show_all_departments);


     //TO-DO Pages list 
     //
     //
     //
//If none of the urls are invoked
     app.use(express.static(path.join(__dirname, '../Frontend/www')));
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


