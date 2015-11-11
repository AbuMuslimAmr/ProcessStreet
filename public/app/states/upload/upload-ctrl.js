(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .controller('UploadCtrl', function($scope, api, Upload, WISTIA_URL, WISTIA_PROJ_ID, WISTIA_API_PASSWORD) {
      function load() {
        api
          .getProject()
          .then(function(project) {
            $scope.project = project;
          });
      }

      $scope.upload = function() {
        Upload.upload({
          url: WISTIA_URL,
          data: {
            file: $scope.file,
            project_id: WISTIA_PROJ_ID,
            api_password: WISTIA_API_PASSWORD
          }
        }).then(function (response) {
          console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' + response.data);
        }, function (response) {
          console.log('Error status: ' + response.status);
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
      };

      load();
    });
})();