(function() {
   'use strict';

   angular
   .module('CalendarApp', [
      'ui.router'
   ])
   .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('/', {
            url:'/',
            controller: 'DayController',
            templateUrl: 'views/day.html'
         })
         .state('event', {
            url:'/event/:id',
            controller: 'EventController',
            templateUrl: 'views/event.html'
         })

   })
})()