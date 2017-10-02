(function() {
  'use strict';

  angular
    .module('bbWeather')
    .filter('direction', direction);

  function direction() {
    var filter = function(input) {
      if (!isFinite(+input)) {
        return '-';
      }

      input = +input % 360; // keep in the 0 to 360 range

      if (11.25 <= input && input < 33.75) {
        return 'NNE';
      } else if (33.75 <= input && input < 56.25) {
        return 'NE';
      } else if (56.25 <= input && input < 78.75) {
        return 'ENE';
      } else if (78.75 <= input && input < 101.25) {
        return 'E';
      } else if (101.25 <= input && input < 123.75) {
        return 'ESE';
      } else if (123.75 <= input && input < 146.25) {
        return 'SE';
      } else if (146.25 <= input && input < 168.75) {
        return 'SSE';
      } else if (168.75 <= input && input < 191.25) {
        return 'S';
      } else if (191.25 <= input && input < 213.75) {
        return 'SSW';
      } else if (213.75 <= input && input < 236.25) {
        return 'SW';
      } else if (236.25 <= input && input < 258.75) {
        return 'WSW';
      } else if (258.75 <= input && input < 281.25) {
        return 'W';
      } else if (281.25 <= input && input < 303.75) {
        return 'WNW';
      } else if (303.75 <= input && input < 326.25) {
        return 'NW';
      } else if (326.25 <= input && input < 348.75) {
        return 'NNW';
      }

      return 'N';
    };

    return filter;
  }

})();
