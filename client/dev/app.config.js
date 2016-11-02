;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);<!--This is a simple way to get pretty URLs and remove the hashtag in your Angular application-->
        
      }
    ]);
}(window.angular));
