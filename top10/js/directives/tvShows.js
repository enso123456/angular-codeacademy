(function() {
   'use strict';

   angular
   .module('top10App')
   .directive('tvShows', tvShows)

   function tvShows() {
      return {
         restrict: 'AE',
         scope: {
            show: '='
         },
         templateUrl: 'js/directives/tvShows.html'
      }
   }
})()