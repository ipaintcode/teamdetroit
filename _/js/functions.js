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

		
		function resetCarousel(way) {
			var windownWidth = ($(window).width() > 960) ? $(window).width() : 960;	
			if(way === "next") {
				$('.fluidCarousel').stop().animate({
					left: ((windownWidth-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)
				}, 500, function() {
					animating = false;
				});
			} else {
				$('.fluidCarousel').stop().animate({
					right: ((windownWidth-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().right-$('.fluidCarousel').offset().right)
				}, 500, function() {
					animating = false;
				});
			}		
		}
		
		var deletedCount = 0;
		var tracker = 1;
		
		$(window).resize(function(event) {
			resetCarousel();
		});
		
		var len = $('.fluidCarousel li').length-1;
		
		$('.page-nate span').text(len+1);
		$('.page-nate .page-of').text(tracker);
		
		$('.next-button').click(function(event) {
			if(!animating) {
				goNext();
				tracker+=1;
				if (tracker === len+2) {
					tracker = 1;
				}
				$('.page-nate .page-of').text(tracker);
			}
		});
		
		$('.prev-button').click(function(event) {
			if(!animating) {
				goPrevious();
				tracker-=1;
				if (tracker === 0) {
					tracker = len+1;
				}
				$('.page-nate .page-of').text(tracker);
			}
		});
		
		$('.next-button').hover(function() {
			$(this).find('a').stop().animate({opacity: .5}, 300);
		}, function() {
			$(this).find('a').stop().animate({opacity: 1}, 300);
		});
		
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
		// $('.billboard-ext-carousel').click(function(event) {
		// 			goNext();
		// 		});
		
		function goNext() {
			//f (deletedCount < 3) {
			//	$('.fluidCarousel li:last').remove();
			//}
			deletedCount+=1;
			if(!animating) {
				animating = true;
				$('.fluidCarousel li:last').before($('.fluidCarousel li:first'));
				var ulLeft = $('.fluidCarousel').css('left');
				$('.fluidCarousel').css('left', $('.fluidCarousel li:last').width()+parseInt(ulLeft, 10));	
				if($('.activeCarousel').next().length === 0) {
					$('.fluidCarousel li').eq(1).addClass('activeCarousel');
				}
				$('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');
				resetCarousel('next');
			}
		}
		
		resetCarousel('next');
		$('.billboard-ext-carousel ul').stop().animate({opacity: 1}, 500);
		
		function goPrevious() {
			deletedCount-=1;
			if(!animating) {
				animating = true;
				$('.fluidCarousel li:first').before($('.fluidCarousel li:last'));
				var ulLeft = $('.fluidCarousel').css('left');
				$('.fluidCarousel').css('left', $('.fluidCarousel li:first').width()+parseInt(ulLeft, 10));
				if($('.activeCarousel').prev().length === 0) {
					$('.fluidCarousel li').eq(len-1).addClass('activeCarousel');
				}
				$('.activeCarousel').removeClass('activeCarousel').prev().addClass('activeCarousel');
				resetCarousel('previous');
			}
		}
	});	
});



/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/