(function() {
  'use strict';

  angular
  .module('WistiaApp')
  .config(function (RestangularProvider, WISTIA_API, WISTIA_API_PASSWORD, WISTIA_PROJ_ID) {
    RestangularProvider.setBaseUrl(WISTIA_API);
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultRequestParams({
      api_password: WISTIA_API_PASSWORD,
      project_id: WISTIA_PROJ_ID
    });
  });
})();