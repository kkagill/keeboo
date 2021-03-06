'use strict';

/**
 * @ngdoc overview
 * @name keeboo
 * @description
 * # keeboo
 *
 * Main module of the application.
 */
angular
  .module('keeboo', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'chart.js',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/distance', {
        templateUrl: 'views/distance.html',
        controller: 'DistanceCtrl'
      })
      .when('/longestdrive', {
        templateUrl: 'views/longestdrive.html',
        controller: 'LongestdriveCtrl'
      })
      .when('/hardbrakes', {
        templateUrl: 'views/hardbrakes.html',
        controller: 'HardBrakesCtrl'
      })
      .when('/fuel', {
        templateUrl: 'views/fuel.html',
        controller: 'FuelCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/cars', {
        templateUrl: 'views/cars.html',
        controller: 'CarsCtrl'
      })
      .when('/cars/:id', {
        templateUrl: 'views/cardetail.html',
        controller: 'CarDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'deleted for security reason',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  })
  .run(function($rootScope, $location){
    $rootScope.$on('$routeChangeStart', function (event) {
        var currentUser = Parse.User.current();
        if (!currentUser)
            $location.path("/");
    })
  });
