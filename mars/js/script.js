/*Плавная прокрутка к ссылкам*/
$(document).ready(function(){
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});

/*Меню*/
$(document).ready(function(){			
	// Navicon Menu Toggle Class 	
	$('.humburger').on("click",function(){	
		$(this).toggleClass('humburgerToggle');
		$('.sidebarMenu').toggleClass('sidebarMenuToggle');
	});
});

/*WOW INIT*/
new WOW().init();

/*slick slider*/
$(document).ready(function() {
$(".heroSlider").slick({
	dots: true,
	vertical: true,
	slidesToShow: 1,
 arrows: false,
	autoplay: true,
	speed: 700,
 autoplaySpeed: 2000,
 cssEase: 'ease-out',
 slidesToScroll: 1,
 responsive: [
 {
  breakpoint: 480,
  settings: {
   vertical: false,
   speed: 700,
   autoplay: true,
  	autoplaySpeed: 2000,
  	cssEase: 'ease-out',
   }
  }
  ]
 });
});
