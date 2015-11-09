(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .config(function($stateProvider, $urlRouterProvider, DEFAULT_STATE) {
      $urlRouterProvider.otherwise(DEFAULT_STATE);
      $urlRouterProvider.when('/', DEFAULT_STATE);

      $stateProvider
        .state('upload', {
          url: '/upload',
          templateUrl: 'app/states/upload/upload.html'
        });
    });
})();