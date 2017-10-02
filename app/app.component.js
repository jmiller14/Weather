(function() {
  'use strict';

  angular
    .module('bbWeather')
    .component('bbApp', {
      templateUrl: 'app/app.html',
      controller: AppController
    });

  AppController.$inject = [ 'UnitsService', 'ApiService' ];

  function AppController(UnitsService, ApiService) {
    var vm = this;

    vm.isLoadingForecast = false;
    vm.units = UnitsService;
    vm.cities = [
      'London, UK',
      'Paris, FR',
      'Berlin, DE',
      'Amsterdam, NL',
      'Brussels, BE'
    ];
    vm.forecast = null;
    vm.isForecastActive = false;

    vm.toggleUnits = function() {
      vm.units.useMetric = !vm.units.useMetric;
    };

    vm.getForecast = function(city) {
      if (!vm.isLoadingForecast) {
        vm.isLoadingForecast = true;

        ApiService.getForecastForLocation(city)
          .then(function(forecast) {
            vm.forecast = forecast;
            vm.isForecastActive = true;
          })
          .catch(function(err) { console.error(err) })
          .finally(function() { vm.isLoadingForecast = false });
      }
    };

    vm.closeForecast = function() {
      vm.isForecastActive = false;
    };
  }

})();
