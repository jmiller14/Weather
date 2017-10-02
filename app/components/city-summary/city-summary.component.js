(function() {
  'use strict';

  angular
    .module('bbWeather')
    .component('bbCitySummary', {
      templateUrl: 'app/components/city-summary/city-summary.html',
      controller: CitySummaryController,
      bindings: {
        city: '@'
      }
    });

  CitySummaryController.$inject = [ 'ApiService' ];

  function CitySummaryController(ApiService) {
    var vm = this;

    vm.hasLoaded = false;
    vm.data = null;

    ApiService.getWeatherForLocation(vm.city)
      .then(function(data) {
        vm.hasLoaded = true;
        vm.data = data;
      })
      .catch(function(err) { console.error(err) });
  }

})();
