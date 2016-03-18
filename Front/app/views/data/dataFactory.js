(function() {
  'use strict';
  var dataFactory = function($http) {
    return {
      getData : function() {
        return $http.get('http://localhost:3000/users')
      }
    }
  }

  dataFactory.$inject = ['$http'];
  angular.module('dz').factory('dataFactory', dataFactory);
}());
