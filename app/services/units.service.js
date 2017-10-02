(function() {
  'use strict';

  angular
    .module('bbWeather')
    .factory('UnitsService', UnitsService);

  UnitsService.$inject = [];

  function UnitsService($http) {
    var useMetric = window.localStorage.useMetric === 'true';

    return {
      get useMetric() {
        return useMetric;
      },

      set useMetric(value) {
        window.localStorage.useMetric = useMetric = !!value; // will be stored in localStorage as a string
      }
    };
  }

})();
