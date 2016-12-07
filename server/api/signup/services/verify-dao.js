"use strict";
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const signupSchema = require('../model/signup-model');
const express = require('express');
const app = express();
const Verify = require('../verify/verify');
const _ = require('lodash');
var bcrypt = require('bcryptjs');
var Req,Rand;
signupSchema.statics.userdetails = (req,rand) =>
{
Req = Verify.createHash(req);
Rand = rand;
};

signupSchema.statics.create = (otp) => {
        console.log('frm verify-dao');
        console.log(Req);
	console.log(Rand);
	console.log("otp");
	console.log(otp);
   var v = Verify.check(otp,Rand);
   console.log(v);
   return new Promise((resolve, reject) => {
      if (!_.isObject(Req))
          return reject(new TypeError('signup is not a valid object.'));
         let _signup = new pill(Req);
	 console.log("_signup");
         console.log(_signup)
	if(v){
         _signup.save((err, saved) => {

            err?reject(err)
                :resolve(saved);console.log('success');
	})
	}
	else
	 {
	reject("error");
	 }
     })
}

const pill  = mongoose.model('pill', signupSchema);

module.exports = pill;
