
;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .factory('UserResource', [
      '$resource',
      function($resource) {
	
	
        var _url = '/api/users';
        var _params = {};
        var _methods = {};
        //var _surl = 'api/users';

        //return $resource(_surl, _params, _methods);

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

