;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/todo', {
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
          templateUrl: 'login/templates/login.html',
	  controller: 'login-controller',
	  controllerAs: 'loginctrl'
          
    })

          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
