(function() {
   'use strict';

   angular
   .module('OutboxApp')
   .factory('emails', emails)

   function emails($http) {
      return $http.get('js/email.json')
         .success(function(data){
            return data;
         })
         .error(function(err){
            return err;
         })
   }
})()