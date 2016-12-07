"use strict";
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const signupSchema = require('../model/signup-model');
const Register = require('../register/register');
const _ = require('lodash');
var bcrypt = require('bcryptjs');

module.exports.create = (signup) => {
  console.log('from server dao');
  return new Promise((resolve, reject) => {
     console.log("from server signup-dao");
     Register.create(signup);
        /*   .exec((err,sent) =>{
		console.log(sent);
             err ? reject(err)
                 : resolve(sent);
          });*/
      });
  }

module.exports.create= function(signup){
 console.log("server side signup-dao");
 return new Promise(function(resolve,reject){
     console.log("from return statement of the promise on sign up dao side"); 
          
/*module.exports.create = function(signup) {
	console.log('frm server dao');
       // var sent="sent";
       // return sent;
        console.log(signup);
        return Register.create(signup);
  }*/
