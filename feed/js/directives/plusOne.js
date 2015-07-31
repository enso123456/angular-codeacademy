(function() {
   'use strict';

   angular
      .module('FeedsterApp')
      .directive('plusOne', plusOne)

   function plusOne() {
      return {
         restrict: 'E',
         scope: {},
         templateUrl: 'js/directives/plusOne.html',
         link: function(scope, elem, attrs) {
            scope.like = function() {
               elem.toggleClass('btn-like');
            }
         }
      }
   }
})()