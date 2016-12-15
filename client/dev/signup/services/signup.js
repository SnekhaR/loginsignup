;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .service('signup', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
