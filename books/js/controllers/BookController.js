(function() {
   'use strict';

   angular
      .module('ReaderApp')
      .controller('BookController', BookController)

      BookController.$inject = ['$scope', '$stateParams', 'books']

      function BookController($scope, $stateParams, books) {
         books.getBooks().then(function(book) {
            var book_id = $stateParams.id;
            $scope.currentBookIndex = book_id;

            $scope.book = book.data[book_id];
         })
      }
})()