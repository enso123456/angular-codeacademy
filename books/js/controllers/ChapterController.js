(function() {
   'use strict';

   angular
      .module('ReaderApp')
      .controller('ChapterController', ChapterController)

      function ChapterController($scope, books, $stateParams) {
         books.getBooks().then(function(books) {
            var book_id = $stateParams.bookId;
            var chapterId = $stateParams.chapterId;

            $scope.chapter = books.data[book_id].chapters[chapterId];

            $scope.currentBookIndex = parseInt(book_id);
            $scope.currentChapterIndex = parseInt(chapterId);
            $scope.nextChapterIndex = $scope.currentChapterIndex + 1;

            if(chapterId >= books.data[book_id].chapters.length - 1) {
               $scope.nextChapterIndex = '0';
            }
         })
      }
})()