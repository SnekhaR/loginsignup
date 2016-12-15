
;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('VerifDAO', [
      '$q','VerifResource',
      function($q,VerifResource) {
        var VerifDAO = function() {};
        VerifDAO.prototype.create = function(verifa) {
          
  console.log("in verify DAO");
  console.log(verifa);
          var _onSuccess = function(verif) {
		console.log("onsuc");
		console.log(verif);
            return(verif);
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return VerifResource
            .save(verifa)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        }
      
return new VerifDAO;
}
]);

}(window.angular));

