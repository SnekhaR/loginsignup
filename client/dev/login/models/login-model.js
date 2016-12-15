;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('login', [
      function() {
        var login = function(user) {
          this.username = null;
          this.password = null;
          ng.extend(this,user);
        };

       //login.prototype.isValid = function() {
         // return !!this.name && !!this.birthDate;
       // };

        return login;
      }
    ]);
}(window.angular));


