
;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .factory('TodoResource', [
      '$resource',
      function($resource) {
        var _url = '/api/todos/:id';
        var _params = {};
        var _methods = {};
	//var _surl = 'api/users';
	//return $resource(_surl, _params, _methods);

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

