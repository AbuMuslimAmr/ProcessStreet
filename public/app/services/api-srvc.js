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

      function getVideo(id) {
        return Restangular
          .one('medias', id)
          .get();
      }

      return {
        getProject: getProject,
        getVideo: getVideo
      }
    });
})();