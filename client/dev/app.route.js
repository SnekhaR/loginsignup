;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'todo/templates/todo.html',
            controller: 'TodoController',
            controllerAs: 'todoCtrl'
          })
	.when('/register',{
	 templateUrl :'todo/templates/regi.html',
         controller:'myCtrl'
	 
})
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));

