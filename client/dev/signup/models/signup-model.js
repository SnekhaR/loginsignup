;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('Signup', function() {

      var Signup = function(){};

      var MIN_ACCEPTED_LENGTH = 8;
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      var letterNumber = /^[0-9a-zA-Z]+$/; 
      Signup.prototype.email = function(str) {
          
          var n = str.indexOf("@");
          var p = str.indexOf(".");
          var s = str.substring(n+1 , p);
          return (s=="tatacommunications");
            
          };
        

      Signup.prototype.username = function(formdata) {
        var _isDefined = ng.isDefined(formdata);
        var _isString = ng.isString(formdata);
        var _isBigEnough = (_isDefined && _isString) && (formdata.length >= MIN_ACCEPTED_LENGTH) ? letterNumber.test(formdata) : false;

        return _isDefined && _isString && _isBigEnough;
      };

      
      Signup.prototype.isValid = function(formdata) {
        var _isDefined = ng.isDefined(formdata);
        var _isString = ng.isString(formdata);
        var _isBigEnough = (_isDefined && _isString) && (formdata.length >= MIN_ACCEPTED_LENGTH) ? re.test(formdata) : false;

        return _isDefined && _isString && _isBigEnough;
      };

      return new Signup();
    });

}(window.angular));

