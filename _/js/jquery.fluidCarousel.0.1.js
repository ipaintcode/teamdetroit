$(document).ready(function (){
	
	$('.gridbox, .close-video').hover(function() {
		$(this).stop().animate({opacity: .5}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 300);
	});
	
	$(window).load(function() {
		
		var width = 0,
			deletedCount = 0,
			tracker = 1,
			animating = false,
			videoActive = false,
			len = $('.fluidCarousel li').length-1;
			
		$('.fluidCarousel li img').each(function(index) {
			width +=$(this).width();
		});
		$('.fluidCarousel').width(width);			
		var w = ($(window).width()-$('.fluidCarousel').width())/2;
		
		function resetCarousel(way) {
			var windowWidth = ($(window).width() > 960) ? $(window).width() : 960,
				one = (windowWidth-$('.activeCarousel').width())/2,
				two = $('.activeCarousel').offset().left-$('.fluidCarousel').offset().left;
		
			$('.fluidCarousel').stop().animate({
				left: (one-two)
			}, 500, function() {
				animating = false;
			});
				
		}
		
		$(window).resize(function(event) {
			resetCarousel();
		});
		
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
				if(e.keyCode === 37) { // left
					goPrevious();
				}
				if(e.keyCode === 39) { // right
					goNext();
				}
				if(e.keyCode === 13 && $('.activeCarousel .youtube-video-holder').length > 0) { // enter
					if(!videoActive) {
						playVideo();
					}
				}
			}
		});

		
		$(document).on("click", ".activeCarousel .close-video", closeVideo);
		
		function closeVideo(way) {
			animating = true;
			$('.activeCarousel .close-video').css('display', 'none');
			$('.activeCarousel img').stop().animate({top: 0}, 300);
			$('.activeCarousel h4').css({display: 'block', opacity: 0});
			$('.activeCarousel h4').stop().delay(300).animate({opacity: 1})
			$('.activeCarousel .youtube-video-holder').stop().animate({top: 420}, 300, function() {
				$('.activeCarousel .youtube-video-holder').html('');
				$('.activeCarousel .youtube-video-holder').stop().animate({top: 420}, 300, function() {
					animating = false;
					videoActive = false;
					if(way === 'next') {
						goNext();
					}
					if(way === 'prev') {
						goPrevious();
					}
				})
				
			});
		}
		
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
			$('.activeCarousel img').stop().delay(250).animate({top: -420}, 330);
			$('.activeCarousel h4').css({display: 'none'});
			$('.activeCarousel .close-video').css({
			  display: 'block',
			  opacity: 0
			}).animate({opacity: 1}, 300);
			$('.activeCarousel .youtube-video-holder').stop().delay(250).animate({top: 0}, 300, function() {
				animating = false;
			});
			var w = $('.activeCarousel .youtube-video-holder').attr('w');
			if (w === undefined) {
				w = $('.activeCarousel img').width();
			}
			
			$('.activeCarousel .youtube-video-holder').html('<iframe id="ytplayer" width="'+w+'" height="420" src="http://www.youtube.com/embed/'+$('.activeCarousel .youtube-video-holder').attr('data')+'?wmode=opaque&autoplay=1&autohide=1&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>');
			
		}
		
		$('.next-button, .prev-button, .next-button-stereo, .prev-button-stereo').hover(function() {
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
		
		// $('.billboard-ext-carousel').click(function(event) {
		// 			goNext();
		// 		});
		
		function goNext() {
	
			if(!animating) {
				if (videoActive) {
					return closeVideo('next');
				} else {
					animating = true;
				
					tracker+=1;
					if (tracker === len+2) {
						tracker = 1;
					}
					$('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({opacity: 1}, 300);
				
					$('.fluidCarousel li:last').after($('.fluidCarousel li:first'));
					var x = parseInt($('.fluidCarousel').css('left'), 10);
					$('.fluidCarousel').css({
						left: x+$('.fluidCarousel li:last').width()
					});
					$('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');
				
					resetCarousel('next');
				}
			}
		}
		
		resetCarousel('next');
		$('.billboard-ext-carousel ul').stop().animate({opacity: 1}, 500);
		
		function goPrevious() {
	
			if(!animating) {
				if (videoActive) {
					return closeVideo('prev');
				} else {
					animating = true;
				
					tracker-=1;
					if (tracker === 0) {
						tracker = len+1;
					}
					$('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({opacity: 1}, 300);
				
					$('.fluidCarousel li:first').before($('.fluidCarousel li:last'));
					var x = parseInt($('.fluidCarousel').css('left'), 10);
					$('.fluidCarousel').css({
						left: x-$('.fluidCarousel li:first').width()
					});
					$('.activeCarousel').removeClass('activeCarousel').prev().addClass('activeCarousel');
				
					resetCarousel('previous');
				}
			}
		}
	});
	function goToByScroll(val, speed) {
		$('html,body').animate({
			scrollTop: val
		}, speed || 200);
	}
	
	$('body').prepend('<div id="go-back-up"></div>');
	$('#go-back-up').css({
		'background-image': 'url(/teamdetroit/_/img/up-arrow.png)',
		'position': 'fixed',
		'top': '50%',
		'marginTop': -40,
		'right': -40,
		'width': 39,
		'height': 39,
		'zIndex': 10000,
		'cursor': 'pointer'
	})
	$(window).scroll(function(event) {

		if ($(window).scrollTop() > 0) {
			$('#go-back-up').stop().animate({right: 0}, 300);
		} else {
			$('#go-back-up').stop().animate({right: -40}, 300);
		}
	});
	
	$('#go-back-up').click(function(event) {
		goToByScroll(0, 500);
	});
	
	$('#go-back-up').hover(function() {
		$(this).stop().animate({opacity: .7}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 0);
	});
});