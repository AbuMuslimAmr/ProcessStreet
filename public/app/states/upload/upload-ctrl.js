(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .controller('UploadCtrl', function($scope, $http, WISTIA_URL, WISTIA_API_PASSWORD) {
      $scope.fileUploadOptions = {
        url: WISTIA_URL,
        api_password: WISTIA_API_PASSWORD
      };

    });
})();