(function() {
   'use strict';

   angular
   .module('NearMeApp')
   .directive('leaflet', leaflet)

   function leaflet() {
      return {
         restrict: 'AE',

      }
   }
})()