"use strict";

const authenticate = require('../dao/authenticate-dao');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');




module.exports = function() {
passport.use(new LocalStrategy(
  function(username, password, done) {
   authenticate.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null,false, {message: 'Unknown User'});
   	}

   	authenticate.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null,user);
   	
	} else {
   			return done(null,false, {message: 'Invalid password'});
   		}
   	});
   });
  }));





  passport.serializeUser(function(user, done) {
  
 done(null, user.id);
});

   passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
  done(err, user);
  });
});

};

