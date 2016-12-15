"use strict";

const passport = require('passport');
const  express           = require('express');
const  app               = express();
var a = new Object();
a.name = "authenticated";



module.exports = class authenticateRoutes {
  static init(router) {
    router
      .route('/api/authenticate')     
      .post(passport.authenticate('local'),
  function(req, res) {
    
    res.json(a);
  });

}
}

