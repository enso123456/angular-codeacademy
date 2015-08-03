(function() {
   'use strict';

   angular
   .module('top10App')
   .controller('MainController', MainController)

   function MainController($scope, shows) {
      shows.success(function(responseData) {
         $scope.shows = responseData;
      });
   }
})()