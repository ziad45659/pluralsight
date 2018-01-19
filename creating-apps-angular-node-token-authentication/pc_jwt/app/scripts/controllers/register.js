'use strict';

angular.module('pcJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function () {

      var url = '/';
      var user = {};
      $http.post(url, user)
        .then(function (response) {
            alert('success', 'Ok', 'You are now registered');
          },
          function (error) {
            alert('warning', 'Oops!', 'Could not register');
          }
        )
    }
  });
