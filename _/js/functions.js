// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
	
	$('.wrapper').stop().delay(500).animate({
		opacity: 1
	}, 500);

	$('a').click(function(ele) {
		if($(this).attr('href').indexOf("#billboard_") !== 0) {
			ele.preventDefault();
			var url = $(this).attr('href');
			if (url.indexOf("#") === -1) {
				$('.wrapper').stop().animate({
					opacity: 0
				}, 500, function() {
					window.location.href = url;
				});
			}
		}else {
			
		}
	});
	
	var width = 0;
	var which = 3;
	
	$(window).load(function() {

		$('.fluidCarousel li img').each(function(index) {
			width +=$(this).width();
		});
		$('.fluidCarousel').width(width);			
		var w = ($(window).width()-$('.fluidCarousel').width())/2;

		
		function resetCarousel() {
			$('.fluidCarousel').stop().animate({
				left: (($(window).width()-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)
			}, 500, function() {
				animating = false;
			});
		}
		
		
		$(window).resize(function(event) {
			resetCarousel();
		});
		
		$('li').eq(4).clone().prependTo('.fluidCarousel');
		$('li').eq(4).clone().prependTo('.fluidCarousel');
		$('.fluidCarousel li img').each(function(index) {
			width +=$(this).width();
		});
		$('.fluidCarousel').width(width);
		$('.fluidCarousel').css({
			left: (($(window).width()-$('.active').width())/2)-($('.active').offset().left-$('.fluidCarousel').offset().left)
		});
		
		var animating = false;
		$(window).click(function(event) {
		if(!animating) {
			animating = true;
			$('li:last').after($('li:first'));
			var ulLeft = $('.fluidCarousel').css('left');
			$('.fluidCarousel').css('left', $('li:last').width()+parseInt(ulLeft, 10));	
			if($('.activeCarousel').next().length === 0) {
					$('li').eq(1).addClass('active');
				}
				$('.activeCarousel').removeClass('active').next().addClass('active');
				resetCarousel();
			}
		});
		
		resetCarousel();
		
	});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/