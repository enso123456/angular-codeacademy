(function() {
   'use strict';

   angular
   .module('CalendarApp')
   .controller('DayController', DayController)
   .controller('EventController', EventController)

   function DayController($scope, events) {
      events.success(function(responseData) {
         $scope.days = responseData;
      })
   }

   function EventController($scope, events, $stateParams) {
      events.success(function(responseData) {
         $scope.event = responseData.events[$stateParams.id];
      })
   }
})()