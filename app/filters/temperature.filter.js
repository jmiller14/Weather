(function() {
  'use strict';

  angular
    .module('bbWeather')
    .filter('temperature', temperature);

  temperature.$inject = [ 'UnitsService' ];

  function temperature(UnitsService) {
    var filter = function(input) {
      var number = isFinite(+input)
        ? Math.round(UnitsService.useMetric ? (+input - 32) / 1.8 : +input)
        : '-';

      return number + '°' + (UnitsService.useMetric ? 'C' : 'F');
    };

    // this causes the filter to update when a digest is triggered, e.g. when `useMetric` changes
    filter.$stateful = true;

    return filter;
  }

})();
