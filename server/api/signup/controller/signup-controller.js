"use strict";
const Register = require('../register/register');
const VerifyDAO = require('../services/verify-dao');
module.exports = class signupController { 
  static create(req, res) {
      let _signup = req.body;
	console.log('server ctrl');
   Register
        .create(_signup)
        .then(sent => res.status(201).json(sent))
        .catch(error => res.status(400).json(error));
  }
   static verif(req, res) {
      let _signup = req.body;
        console.log('server ctrl verif');
     VerifyDAO
        .create(_signup)
        .then(signup => res.status(201).json(signup))
        .catch(error => res.status(400).json(error));
  }
}
