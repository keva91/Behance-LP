
angular.module('myApp.homePage').component('slideshow', {

  templateUrl:'landingPage/slideshow/slideshow.html',
  controller: function slideshowCtrl(products) {

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  }
});