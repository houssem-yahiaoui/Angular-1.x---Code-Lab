(function() {
  'use strict';
   angular.module('dz', ['ui.router'])
      .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('home', {
            url : '/',
            controller : 'homeCtrl',
            templateUrl : 'views/home/home.html'
          })
          .state('twoWays', {
            url : '/twoWays',
            controller : 'twoCtrl',
            templateUrl : 'views/twoWays/two.html'
          })
          .state('getData', {
            url : '/data',
            controller : 'dataCtrl',
            templateUrl : 'views/data/data.html'
          })
      }])
}());
