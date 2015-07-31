(function() {
   'use strict';

   angular
      .module('BoltNetworkApp')
      .directive('gameBoard', gameBoard)

   function gameBoard() {
      return {
         restrict: 'E',
         scope: {
            game: '='
         },
         templateUrl: 'js/directives/gameBoard.html'
      }
   }
})()