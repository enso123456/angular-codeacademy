(function() {
   'use strict';

   angular
   .module('OutboxApp')
   .controller('MailController', MailController)

   function MailController($scope, emails) {
      emails.success(function(responseData) {
         $scope.emails = responseData;
      });
   }
})()