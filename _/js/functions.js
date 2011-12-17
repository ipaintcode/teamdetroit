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

		// ((windownWidth-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)
		
		function resetCarousel(way) {
			var windownWidth = ($(window).width() > 960) ? $(window).width() : 960,
				one = (windownWidth-$('.activeCarousel').width())/2,
				two = $('.activeCarousel').offset().left-$('.fluidCarousel').offset().left;
			console.log(one-two);
			console.log(one+":"+two);		
			$('.fluidCarousel').stop().animate({
				left: (one-two)
			}, 500, function() {
				animating = false;
			});
				
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
			}
		});
		
		$('.prev-button').click(function(event) {
			if(!animating) {
				goPrevious();
				
			}
		});
		
		$("body").keydown(function(e) {
			if(!animating) {
				if(e.keyCode == 37) { // left
					goPrevious();
				}
				if(e.keyCode == 39) { // right
					goNext();
				}
			}
		});
		
		$(document).on("mouseover", ".activeCarousel h4", playBtnOver);
		$(document).on("mouseout", ".activeCarousel h4", playBtnOut);
		$(document).on("click", ".activeCarousel h4", playVideo);
		
		function playBtnOver() {
			$(this).animate({opacity: .5}, 300);
		}
		
		function playBtnOut() {
			$(this).animate({opacity: 1}, 300);
		}
		
		function playVideo() {
			animating = true;
			videoActive = true;
			$('.activeCarousel .youtube-video-holder').css('width', $('.activeCarousel img').width())
			$('.activeCarousel img').animate({top: -420}, 300);
			$('.activeCarousel .youtube-video-holder').animate({top: 0}, 300);
			
		}
		
		$('.next-button, .prev-button').hover(function() {
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
		
		var animating = false,
			videoActive = false;
		// $('.billboard-ext-carousel').click(function(event) {
		// 			goNext();
		// 		});
		
		function goNext() {
			tracker+=1;
			if (tracker === len+2) {
				tracker = 1;
			}
			$('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({opacity: 1}, 300);
	
			if(!animating) {
				animating = true;
				
				$('.fluidCarousel li:last').after($('.fluidCarousel li:first'));
				var x = parseInt($('.fluidCarousel').css('left'), 10);
				$('.fluidCarousel').css({
					left: x+$('.fluidCarousel li:last').width()
				});
				$('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');
				
				resetCarousel('next');
			}
		}
		
		resetCarousel('next');
		$('.billboard-ext-carousel ul').stop().animate({opacity: 1}, 500);
		
		function goPrevious() {
			tracker-=1;
			if (tracker === 0) {
				tracker = len+1;
			}
			$('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({opacity: 1}, 300);
	
			if(!animating) {
				animating = true;
				
				$('.fluidCarousel li:first').before($('.fluidCarousel li:last'));
				var x = parseInt($('.fluidCarousel').css('left'), 10);
				$('.fluidCarousel').css({
					left: x-$('.fluidCarousel li:first').width()
				});
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