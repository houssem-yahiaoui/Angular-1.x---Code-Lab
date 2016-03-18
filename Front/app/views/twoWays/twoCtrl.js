(function() {
  'use strict';
  var twoCtrl = function ($scope) {

      var test = $scope.test;
  }
  twoCtrl.$inject = ['$scope'];
  angular.module('dz').controller('twoCtrl', twoCtrl);

}());
