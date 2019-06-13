// angular.module('myApp.homePage').directive('description', function() {
//   return {
//     restrict: 'AE',
//     scope: {},
//     templateUrl: 'landingPage/description/description.html',
//     link: function(scope) {
//     	this.isMobile = false;

//     	if (window.matchMedia('screen and (max-width: 768px)').matches) {
//     		this.isMobile = true;
//     	}
     
//     }
//   };
// });


angular.module('myApp.homePage').component('description', {

  templateUrl:'landingPage/description/description.html',
  controller: function descriptionCtrl(products) {
  	this.isMobile = false;

	if (window.matchMedia('screen and (max-width: 600px)').matches) {
		this.isMobile = true;
		console.log('pt')
	}

  }
});


