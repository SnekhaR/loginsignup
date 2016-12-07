
//const Signup = require('../services/signup-dao');
const VerifyDAO = require('../services/verify-dao');
var nodemailer        = require("nodemailer"),
    express           = require('express'),
    http              = require('http'),
    fs                = require('fs'),
    app               = express();
    Promise = require('bluebird');
const _ = require('lodash');

var rand,mailOptions,link,host;

//-------------------------------------------------------------------------------------------------------------------------
function randomString(length, chars) {             //Alphanumeric 15 digit OTP
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var rString = randomString(15, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//---------------------------------------------------------------------------------------------------------------------------
rand=rString;
//--------------------------------------------------------------------------------------------------------------------------

module.exports.create=function(req) {
    //var _signup = req.body;
	
    var x = new Object();
    //x = Signup.createHash(_signup);

link="http://192.168.122.26:3000/verify?id="+rand;

    console.log("register:-)");
    console.log(req);
    

           mailOptions={
                to : req.email,
                subject : "Please confirm your Email account",
               html :  "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
                      }

    var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "snekhachandran@gmail.com",
        pass: "s8n8e0k7h4a81525"
    }
});
   return new Promise(function(resolve,reject){
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
           // response.send("error");
            reject(error);
     }
     else{

            console.log("Message sent: " + response.message);
            VerifyDAO.userdetails(req,rand);
	   // response.send("sent");
            var sent= new Object();
            sent.a="sent";
            resolve("sent");
     }
    });
   });
  }
