;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('SignupDAO', [
      '$q','SignupResource',
      function($q,SignupResource) {
        var SignupDAO = function() {};
      SignupDAO.prototype.create = function(x) {
          
	console.log("in DAO");
	console.log(x);
          var _onSuccess = function(x) {
            console.log('return dao');
            console.log("sent bitch");
            console.log(x);
	   
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return SignupResource
            .save(x)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        }
  return new SignupDAO;
}]);
}(window.angular));
