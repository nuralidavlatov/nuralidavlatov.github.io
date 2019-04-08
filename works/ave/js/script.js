/*Меню*/
$(document).ready(function(){			
	
	// Navicon Menu Toggle Class 	
	$('.humburger').on("click",function(){	
		$(this).toggleClass('humburgerToggle');
		$('nav').toggleClass('menuToggle');
	});
	$(".clickList").on("click",function(){
		$(this).siblings().removeClass("activeList");
		$(this).toggleClass('activeList');
	});
	$('input').on("focus",function(){	
		$(".search").addClass('activeSearch');
	});
	$('.searchCancel').on("click",function(){	
		$(".activeSearch").removeClass('activeSearch');
	});
	/*Плавная прокрутка к ссылкам*/
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
 $(".imageSlider").slick({
        dots: false,
        arrows: true,
								vertical: false,
								slidesToShow: 1,
								autoplay: false,
								speed: 700,
							 autoplaySpeed: 600,
							 cssEase: 'ease-out',
							 slidesToScroll: 1
      });
});


	