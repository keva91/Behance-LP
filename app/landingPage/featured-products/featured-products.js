angular.module('myApp.homePage').component('featuredProducts', {

  templateUrl:'landingPage/featured-products/featured-products.html',
  controller: function featuredProductsCtrl($rootScope,products) {

  	this.products = products;
    this.isMobile = false;

    if (window.matchMedia('screen and (max-width: 600px)').matches) {
      this.isMobile = true;
    }

    this.addProduct = function(product){
      $rootScope.$broadcast('addProduct', product);
    }

    this.addLike = function(product){
      $rootScope.$broadcast('addLike', product);
    }

    this.shuffle = function (a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	  }
    this.shuffle(this.products);
  }
});



