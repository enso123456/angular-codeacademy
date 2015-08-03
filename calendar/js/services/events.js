(function() {
   'use strict';

   angular
   .module('CalendarApp')
   .service('events', events)

   function events($http) {
      return $http.get('js/event.json')
         .success(function(data) {
            return data;
         })
         .error(function(err) {
            return err;
         })
   }
})()