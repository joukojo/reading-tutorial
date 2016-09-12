angular.
  module('learning').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/learnread', {
          templateUrl: '/js/templates/reading/reading-template.html',
          controller: 'learnReadController'
        }).

        when('/reading', {
          templateUrl: '/js/templates/reading/reading-template.html',
          controller: 'learnReadController'
        }).
        when('/math-comparision', {
          templateUrl: '/js/templates/math-comparision/comparision.html',
          controller: 'mathComparisionCtrl'
        }).
        otherwise('/reading');
    }
  ]);
