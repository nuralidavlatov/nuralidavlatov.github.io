$(document).ready(function() {
	$('.menu-icon').on('click', function(){
		$('.header').toggleClass('headerClick');
	});
  $(".albums").slick({
  dots: false,
  vertical: false,
  slidesToShow: 4,
 arrows: false,
  autoplay: true,
  speed: 1500,
 autoplaySpeed: 2000,
 cssEase: 'ease-out',
 slidesToScroll: 1,
 responsive: [
 {
  breakpoint: 480,
  settings: {
   vertical: false,
   speed: 700,
   slidesToShow: 2,
   autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
   }
  }
  ]
 });
});



