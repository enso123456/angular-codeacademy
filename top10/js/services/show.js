(function() {
   'use strict';

   angular
   .module('top10App')
   .service('shows', shows)

   function shows($http) {
      return $http.get('js/shows.json')
         .success(function(data){
            return data;
         })
         .error(function(err){
            return err;
         })
   }
})()