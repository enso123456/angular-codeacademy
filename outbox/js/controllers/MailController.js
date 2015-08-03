(function() {
   'use strict';

   angular
   .module('OutboxApp')
   .controller('HomeController', HomeController)
   .controller('MailController', MailController)

   function HomeController($scope, emails) {
      emails.success(function(responseData) {
         $scope.emails = responseData;
      });
   }
   function MailController($scope, $stateParams, emails) {
      emails.success(function(responseData) {
         $scope.email = responseData[$stateParams.id]
      })
   }
})()