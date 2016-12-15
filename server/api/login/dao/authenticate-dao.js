"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const authenticateSchema = require('../model/authenticate-model');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
authenticateSchema.statics.getUserByUsername = function(username, callback){
	var query = {username: username};
	authenticate.findOne(query, callback);
}

authenticateSchema.statics.getUserById = function(id, callback){
	authenticate.findById(id, callback);
}

authenticateSchema.statics.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}


const authenticate = mongoose.model('authenticate', authenticateSchema);

module.exports = authenticate;

