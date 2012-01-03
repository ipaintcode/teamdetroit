// remap jQuery to $
(function($){})(window.jQuery);

jQuery.cookie = function(key, value, options) {

	var getAnchor = window.location.href.split("=")[1];
	
	if(getAnchor == 'leaders') {
		$('html,body').stop().delay(100).animate({
			scrollTop: 1630
		}, 0);
	}
	
	if ($('.on-now-title').text().length > 130) {
		var onText = $('.on-now-title').text();
		var tmpText = onText.substr(0, 130);
		$('.on-now-title').text(tmpText + "...");
	}

	// key and at least value given, set cookie...
	if (arguments.length > 1 && String(value) !== "[object Object]") {

		options = jQuery.extend({}, options);

		if (value === null || value === undefined) {
			options.expires = -1;
		}

		if (typeof options.expires === 'number') {
			var days = options.expires,
				t = options.expires = new Date();
			t.setDate(t.getDate() + days);
		}

		value = String(value);

		return (document.cookie = [
		encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IEoptions.path ? '; path=' + options.path : '',
		options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
	}

	// key and possibly options given, get cookie...
	options = value || {};
	var result, decode = options.raw ?
	function(s) {
		return s;
	} : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


$('.add-stream').css('display', 'none');
$('.wdet-inner').css('height', 0);

function rollOver() {
	$('.wdet').stop().animate({
		height: 138
	}, 300);
	$('.billboard, #billboard-spacer').stop().animate({
		marginTop: 232
	}, 300);
	
	$('.wdet-icon img').stop().animate({
		top: -254
	}, 300);
	$('.wdet-icon img').unbind('mouseover', rollOver);
	$('.wdet-icon img').unbind('mouseout', rollOut);
	$('.wdet-inner').stop().animate({
		height: 134
	}, 300);
	$('.add-stream').css('display', 'inline');
}

function rollOut() {
	$('.wdet').stop().animate({
		height: 4
	}, 300);
	$('.add-stream').css('display', 'none');
	$('.billboard, #billboard-spacer').stop().animate({
		marginTop: 98
	}, 300);
	$('.wdet-inner').stop().animate({
		height: 0
	}, 300);

	$('.wdet-icon img').stop().animate({
		top: 0
	}, 300, function() {
		$('.wdet-icon img').bind('mouseover', rollOver);
		$('.wdet-icon img').bind('mouseout', rollOut);
	});
}

$('.wdet').css('cursor', 'pointer');

$('.wrapper').stop().delay(500).animate({
	opacity: 1
}, 500, function() {
	$('.wdet, .wdet-icon img').bind('mouseover', rollOver);
	$('.wdet, .wdet-icon img').bind('mouseout', rollOut);
	// checkImgSize();
});

if ($.cookie("wdet") === "undefined" || $.cookie("wdet") === null) {
	$.cookie("wdet", 0);
}

$('.wdet').click(function(event) {
	var val = $.cookie("wdet") === "0" ? 1 : 0;
	$.cookie("wdet", val);
	wdetPlayer();
});

function isiPhone(){
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}


var video = document.getElementsByTagName("audio")[0];	
video.src = "undefined";

function wdetPlayer() {
	var url = 'http://141.217.119.35:8000/;&amp;topspeed=on;';
	if ($.cookie("wdet") === "0") {
		video.src = "undefined";
		$('.add-stream').css('opacity', 0).text('Start Listening').stop().animate({
			opacity: 1
		}, 500);
	} else {															
		video.src = url;
		video.play();
		$('.add-stream').css('opacity', 0).text('Stop Listening').stop().animate({
			opacity: 1
		}, 500);
	}
}
wdetPlayer();




/* trigger when page is ready */
$(document).ready(function (){
	
	$('.gridbox, .close-video').hover(function() {
		$(this).stop().animate({opacity: ".5"}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 300);
	});
	
	if($.browser.msie === true) {
		$('.wrapper').stop().delay(500).animate({
			opacity: 1
		}, 500);
	} else {
		$('.wrapper').css('opacity', 1);
	}
		

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
		
			$('.fluidCarousel').stop().animate({
				left: (one-two)
			}, 500, function() {
				animating = false;
			});
				
		}
		
		var deletedCount = 0;
		var tracker = 1;
		var animating = false,
			videoActive = false;
		
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
		'background-image': 'url(../_/img/up-arrow.png)',
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



/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/