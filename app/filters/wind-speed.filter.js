(function() {
  'use strict';

  angular
    .module('bbWeather')
    .filter('windSpeed', windSpeed);

  windSpeed.$inject = [ 'UnitsService' ];

  function windSpeed(UnitsService) {
    var filter = function(input) {
      var number = isFinite(+input)
        ? Math.round(UnitsService.useMetric ? +input * 1.609344 : +input)
        : '-';

      return number + ' ' + (UnitsService.useMetric ? 'km/h' : 'mph');
    };

    // this causes the filter to update when a digest is triggered, e.g. when `useMetric` changes
    filter.$stateful = true;

    return filter;
  }

})();
