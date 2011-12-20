$(document).ready(function() {
	$(window).load(function() {
		$('.fluidCarousel li img').each(function(index) {
			width +=$(this).width();
		});
		$('.fluidCarousel').width(width);			
		var w = ($(window).width()-$('.fluidCarousel').width())/2;

		
		function resetCarousel() {
			var windownWidth = ($(window).width() > 960) ? $(window).width() : 960;
			$('.fluidCarousel').stop().animate({
				left: ((windownWidth-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)
			}, 500, function() {
				animating = false;
			});
		}
		
		var deletedCount = 0;
		
		$(window).resize(function(event) {
			resetCarousel();
		});
		
		var len = $('.fluidCarousel li').length-1;
		for (var i = 0; i < len+1; i++) {
		
			$('.fluidCarousel li').eq(len).clone().prependTo('.fluidCarousel').removeClass('activeCarousel');
		}
		$('.fluidCarousel li img').each(function(index) {
			width +=$(this).width();
		});
		$('.fluidCarousel').width(width);
		$('.fluidCarousel').css({
			left: (($(window).width()-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)
		});
		
		var animating = false;
		$('.billboard-ext-carousel').click(function(event) {
		// if (deletedCount < 3) {
		// 		$('.fluidCarousel li:last').remove();
		// 	}
		deletedCount+=1;
		if(!animating) {
			animating = true;
			$('.fluidCarousel li:last').after($('.fluidCarousel li:first'));
			var ulLeft = $('.fluidCarousel').css('left');
			$('.fluidCarousel').css('left', $('.fluidCarousel li:last').width()+parseInt(ulLeft, 10));	
			if($('.activeCarousel').next().length === 0) {
					$('.fluidCarousel li').eq(1).addClass('activeCarousel');
				}
				$('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');
				resetCarousel();
			}
		});
		
		resetCarousel();
		$('.billboard-ext-carousel ul').stop().animate({opacity: 1}, 500);
	});
});
