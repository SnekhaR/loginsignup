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
	  .when('/register', {
            templateUrl: 'signup/templates/signup.html',
            controller: 'myCtrl',
	    controllerAs: 'register'
            
          })
	   .when('/verify', {
          templateUrl: 'signup/templates/verif.html',
          controller: 'verifCtrl',
          controllerAs: 'verify'
    })    
            .when('/login', {
          templateUrl: 'signup/templates/login.html',
          
    })

          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
