(function() {
   'use strict';

   angular
   .module('NearMeApp')
   .controller('MainController', MainController)

   function MainController($scope) {
      $scope.mapCenter = {
         lat: 40.741934,
         lng: -74.004897,
         zoom: 17
      }
   }

})()