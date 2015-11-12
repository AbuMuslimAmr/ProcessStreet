(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .controller('UploadCtrl', function($scope, $timeout, api, Upload,
                                       WISTIA_URL, WISTIA_PROJ_ID, WISTIA_API_PASSWORD, PING_TIMEOUT) {
      $scope.isUploading = false;
      $scope.uploadSuccess = null;

      function load() {
        api
          .getProject()
          .then(function(project) {
            $scope.project = project;
          });
      }

      $scope.upload = function() {
        $scope.isUploading = true;
        $scope.progress = 0;
        $scope.uploadSuccess = null;

        Upload.upload({
          url: WISTIA_URL,
          data: {
            file: $scope.file,
            project_id: WISTIA_PROJ_ID,
            api_password: WISTIA_API_PASSWORD
          }
        }).then(function (response) {
          var video = response.data;
          $scope.project.medias.unshift(video);
          $scope.uploadSuccess = true;
          $scope.file = null;
          watchVideoStatus(video);
        }, function () {
          $scope.uploadSuccess = false;
        }, function (event) {
          $scope.progress = parseInt(100.0 * event.loaded / event.total);
        })['finally'](function() {
          $scope.isUploading = false;
        });
      };

      function watchVideoStatus(video) {
        $timeout(function() {
          api
            .getVideo(video.hashed_id)
            .then(function(freshVideo) {
              video.status = freshVideo.status;

              if (['ready', 'failed'].indexOf(video.status) === -1) {
                watchVideoStatus(video);
              }
            });
        }, PING_TIMEOUT);
      }

      load();
    });
})();