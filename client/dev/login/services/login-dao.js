;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('logindao', ['$q', 'login',
      'loginresource',
      function($q, login, loginresource) {
        var  logindao= function() {};

        logindao.prototype.authenticate = function(user) {
          var _onSuccess = function(err) {


console.log(err.name);

if(err.name=='authenticated'){
console.log(err.name);
window.location="192.168.122.26:3000/profile";
}
            console.log(user);
            return user; // this will be returned as a resolved promise
}
          var _onError = function(error) {
            // do something with the error, like making it more readable or something
            return $q.reject(error); // this will be returned as a rejected promise
          };
	console.log("client dao");
	console.log(user);
          return loginresource
            .save(user)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

return new logindao();
}]);
}(window.angular));

