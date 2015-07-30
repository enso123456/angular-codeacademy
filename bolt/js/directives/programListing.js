(function() {
   'use strict';

   angular
   .module('BoltNetworkApp',[])
   .directive('programListing', programListing)

   function programListing() {
      return {
         restrict: 'E',
         scope: {
            info: '='
         },
         templateUrl: 'js/directives/programListing.html'
      }
   }
})()