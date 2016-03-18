(function() {
  'use strict';
  var dataCtrl = function ($scope, dataFactory) {
    dataFactory.getData().success(function(data) {
      $scope.users = data;
    });
  }

  dataCtrl.$inject = ['$scope', 'dataFactory'];
  angular.module('dz').controller('dataCtrl', dataCtrl);
}());
