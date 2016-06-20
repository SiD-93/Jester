angular.module('Jester', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/shows/:id', {
      templateUrl: 'views/detail.html',
      controller: 'DetailCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'AddCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
