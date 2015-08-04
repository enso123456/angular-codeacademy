(function() {
   'use strict';

   angular
   .module('ReaderApp', [
      'ui.router'
   ])
   .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('/', {
            url: '/',
            controller: 'BookShelfController',
            templateUrl: 'views/bookshelf.html'
         })
         .state('book', {
            url: '/books/:id',
            controller: 'BookController',
            templateUrl: 'views/book.html'
         })
         .state('chapter', {
            url: '/books/:bookId/chapters/:chapterId',
            controller: 'ChapterController',
            templateUrl: 'views/chapter.html'
         })
   })
})()