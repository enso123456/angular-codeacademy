(function() {
   'use strict';

   angular
      .module('ReaderApp')
      .service('books', books)

   function books($http) {
      return {
         getBooks: function() {
            return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json');
         }
      }
   }

})()