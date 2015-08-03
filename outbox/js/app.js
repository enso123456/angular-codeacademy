(function() {
   'use strict';

   angular
      .module('OutboxApp', [
         'ui.router'
      ])
      .config(function($stateProvider, $urlRouterProvider) {
         $stateProvider
         .state('/', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/home.html'
         })
         .state('outbox', {
            url: '/outbox/:id',
            controller: 'MailController',
            templateUrl: 'views/outbox.html'
         })
         $urlRouterProvider.otherwise('/');
      })
})()