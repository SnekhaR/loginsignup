'use strict';

if (process.env.NODE_ENV === 'production')
    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const http = require('http');
const express = require('express');
const RoutesConfig = require('./config/routes.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const SignupRoutes = require('./signuproutes/index');
const Login = require('./routes/login');
var a = new Object();
a.name = "authenticated";

const app = express();
require('./api/login/controller/authenticate-controller.js')();
RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());
SignupRoutes.init(app, express.Router());
//app.get('/profile',function(req, res)
  //  {console.log("hi");
   // res.send(a);
 // });
  
Login.init(app, express.Router());
http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });

