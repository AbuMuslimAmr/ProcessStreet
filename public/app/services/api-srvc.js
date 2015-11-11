(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .service('api', function(Restangular, WISTIA_PROJ_ID) {
      function getProject() {
        return Restangular
          .one('projects', WISTIA_PROJ_ID)
          .get();
      }

      return {
        getProject: getProject
      }
    });
})();