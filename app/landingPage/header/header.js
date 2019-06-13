
angular.module('myApp.homePage').component('header', {

  templateUrl:'landingPage/header/header.html',
  controller: function headerCtrl($scope,products) {

  	$scope.articles = [];
  	$scope.likes = [];
  	$scope.searchToggle = false;

  	$scope.$on('addProduct', function(event,data) {
  		if($scope.articles.indexOf(data) == -1){
  			$scope.articles.push(data);
  		} 
  		console.log($scope.articles);
  	}); 


  	$scope.$on('addLike', function(event,data) {
  		if($scope.likes.indexOf(data) == -1){
  			$scope.likes.push(data);
  		} 
  	});   
  
  }
});