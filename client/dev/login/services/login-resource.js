;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .factory('loginresource', [
      '$resource',
      function($resource) {
        var _url = '/api/authenticate';
	console.log("clientresource");
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

