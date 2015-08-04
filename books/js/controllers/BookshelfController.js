(function() {
   'use strict';

   angular
      .module('ReaderApp')
      .controller('BookShelfController', BookShelfController)

      function BookShelfController($scope, books) {
         books.getBooks().then(function(books) {
            $scope.bookshelf = books.data;
         })
      }
})()