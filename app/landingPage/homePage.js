'use strict';

angular.module('myApp.homePage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homePage', {
    templateUrl: 'landingPage/homePage.html',
    controller: 'homePageCtrl'
  });
}])

.controller('homePageCtrl', ['$scope',function($scope) {
  $scope.test = 'landingPage';
}]);