(function() {
   'use strict';

   angular
      .module('FeedsterApp')
      .directive('feed', feed)

   function feed() {
      return {
         restrict: 'E',
         scope: {
            feed: '='
         },
         templateUrl: 'js/directives/feed.html'
      }
   }
})()