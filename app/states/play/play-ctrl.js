(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .controller('PlayCtrl', function ($scope, $stateParams, api) {
      $scope.loading = true;
      $scope.id = $stateParams.id;

      function load() {
        api
          .getVideo($scope.id)
          .then(function(video) {
            $scope.video = video;
            $scope.loading = false;
          });
      }

      window.Wistia.embed($scope.id, {
        autoPlay: false,
        wmode: 'transparent',
        container: 'player-container',
        playbar: true,
        videoFoam: true
      });

      load();
    });
})();