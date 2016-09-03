angular.
  module('learning').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/reading', {
          templateUrl: '/js/templates/reading/reading-template.html',
          controller: 'learnReadController'
        }).
        otherwise('/reading');
    }
  ]);
