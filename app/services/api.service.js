(function() {
  'use strict';

  angular
    .module('bbWeather')
    .factory('ApiService', ApiService);

  ApiService.$inject = [ '$http' ];

  function ApiService($http) {
    // ideally, this would not be version controlled
    var API_KEY = '435bf1c2c3c943b457a6033ccfa373f0';

    var service = {
      getWeatherForLocation: function(location) {
        return $http({
          method: 'GET',
          url: 'https://api.openweathermap.org/data/2.5/weather',
          params: {
            q: location,
            units: 'imperial',
            appid: API_KEY
          }
        })
        .then(function(response) {
          var data = response.data;

          return {
            name: data.name,
            temperature: data.main.temp, // fahrenheit
            windSpeed: data.wind.speed, // mph
            windDirection: data.wind.deg, // degrees
            conditions: data.weather[0].main,
            description: data.weather[0].description,
            code: data.weather[0].id
          };
        });
      },

      getForecastForLocation: function(location) {
        return $http({
          method: 'GET',
          url: 'https://api.openweathermap.org/data/2.5/forecast',
          params: {
            q: location,
            units: 'imperial',
            appid: API_KEY
          }
        })
        .then(function(response) {
          var data = response.data;
          return {
            city: [ data.city.name, data.city.country ].join(', '),
            temperatures: data.list.reduce(function(forecast, item) {
              // dt is a Unix timestamp; must multiply by 1000 since JS dates use ms rather than s
              // also, note that the time given is UTC, so we're looking for 12:00 UTC rather than local
              var date = moment.utc(+item.dt * 1000);

              if (date.hours() === 12) {
                forecast.push({
                  temperature: item.main.temp, // fahrenheit
                  date: date
                });
              }

              return forecast;
            }, [])
          };
        });
      }
    };

    return service;
  }

})();
