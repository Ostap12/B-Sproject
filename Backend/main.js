 var express = require('express');
 var path = require('path');
 var morgan = require('morgan');
 var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 var passport = require('passport')
 function configureEndpoints(app){
     // Get db.js where connection with database is established
     var db = require('./db');

     app.post('/db/create_department/', db.create_department);
     app.get('/db/show_all_departments/', db.show_all_departments);
     app.get('/db/get_department_by_id/', db.get_department_by_id);
     app.get('/db/get_department_by_name/', db.get_department_by_name);
     app.get('db/get_department_by_description/', db.get_department_by_description);
     app.post('/db/update_department/', db.update_department);
     app.get('/db/delete_all_departments/',db.delete_all_departments);
     app.get('/db/delete_department/',db.delete_department);
     
     app.get('/db/get_enduser_by_id/',db.get_enduser_by_id);
     
     app.post('/db/create_user/', db.create_enduser);

     
     var pages = require('./pages');
     
     
     app.get('/login', pages.loginPage);
     app.get('/home', pages.homePage);
     // Middlewares, которые должны быть определены до passport:

    //  app.use(express.bodyParser());

// Passport:


//If none of the urls are invoked
     app.use(express.static(path.join(__dirname, '../Frontend/www')));
 }

function startServer(port){
    var app = express();
    var conf = require("./conf").configure();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
   // app.use(express.cookieParser());
   var cookieParser = require('cookie-parser');
   app.use(cookieParser(conf.cookieSecret));
   // app.use(express.session({ secret: 'SECRET' }));
    app.use(passport.initialize());
      app.use(passport.session());


    configureEndpoints(app);

    app.listen(port, function() {
        console.log('BSApplication Running on http://localhost:' + port+ '/');
    });
}

exports.startServer  = startServer;
