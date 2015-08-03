(function() {
   'use strict';

   angular
   .module('CalendarApp')
   .directive('events', events)

   function events() {
      return {
         restrict: 'E',
         scope: {
            events: '='
         },
         templateUrl: 'js/directives/event.html'
      }
   }
})()