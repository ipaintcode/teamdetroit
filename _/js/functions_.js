// remap jQuery to $
(function($) {})(window.jQuery);

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(key, value, options) {

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

/* trigger when page is ready */
$(document).ready(function() {

	function checkImgSize() {

		if ($('.interactive img').height() === 0 || $('.interactive img').height() === "0") {
			setTimeout(checkImgSize, 1);
			return undefined;
		}
		$('.interactive img').width("100%");
		$('.interactive').height($('.interactive img').height());
	}

	checkImgSize();

	$('.project-nav').hover(function() {
		$('.prev, .next, .project-nav .pagenate a').stop().animate({
			opacity: 1
		}, 500);
	}, function() {
		$('.prev, .next, .project-nav .pagenate a').stop().animate({
			opacity: "0"
		}, 500);
	});

	$('.prev').hover(function() {
		$('.next a').stop().animate({
			opacity: ".5"
		}, 500);
	}, function() {
		$('.next a').stop().animate({
			opacity: 1
		}, 500);
	});

	$('.next').hover(function() {
		$('.prev a').stop().animate({
			opacity: ".5"
		}, 500);
	}, function() {
		$('.prev a').stop().animate({
			opacity: 1
		}, 500);
	});

	$(window).resize(function(e) {
		$('.interactive').height($('.interactive img').height());
	});
	$('.take-a-look').hover(function() {
		$(this).stop().animate({
			opacity: ".5"
		}, 300);
	}, function() {
		$(this).stop().animate({
			opacity: 1
		}, 300);
	});

	var scrollBack;
	var originHeight;
	$('.take-a-look').click(function(e) {
		scrollBack = $(window).scrollTop();
		originHeight = $(window).height();
		$('.wrapper').stop().animate({
			opacity: 0
		}, 200, function() {
			$(this).css({
				visibility: 'hidden',
				height: 0,
				overflow: 'hidden'
			});

			$('.friends-list').css('opacity', 0);
			$('.friends-list').html('<img src="_/img/aboutus/friends-list.png" alt="Friends List">');
			$('.friends-list').animate({
				opacity: 1
			}, 600, function() {
				$('body').css('backgroundColor', '#c80535');
			});
			$(window).scrollTop(0);
			$(window).mousedown(function(e) {
				$('.friends-list').animate({
					opacity: 0
				}, 300, function() {
					$('.friends-list').html('');
					$('.wrapper').css({
						visibility: 'visible',
						height: originHeight,
						overflow: 'visible'
					}).animate({
						opacity: 1
					}, 500);
					$(window).scrollTop(scrollBack);
					$('body').css('backgroundColor', '#ffffff');
				});
				$(window).unbind('mousedown');
			});
		});
	});


	var wasFired = false;

	function firstTime() {
	
		$('.rows-jobs li').each(function(index) {
			$(this).attr('val', $(this).offset().top - 98);
		});
	}

	function goToByScroll(val) {
		$('html,body').animate({
			scrollTop: val
		}, 200);
	}

	$('.rows-jobs h6 a').toggle(function(e) {
		if (wasFired === false) {
			firstTime();
			wasFired = true;
		}
		var pH = $(this).parent().parent().find('.job-content').height();
		$('.rows-jobs').find('li').stop().animate({
			'height': 40
		}, 300).find('h6').find('a').text("Read More");
		$(this).parent().parent().parent().stop().animate({
			'height': pH + 100
		}, 300);
		$(this).css('opacity', 0).text("Close").stop().animate({
			opacity: 1
		}, 500);

		$('.rows-jobs h6 a').data('lastToggle4', 2);
		$(this).data('lastToggle4', 1);
		goToByScroll($(this).parent().parent().parent().attr('val'));
	}, function(e) {
		$(this).data('lastToggle4', 2);
		$(this).parent().parent().parent().stop().animate({
			'height': 40
		}, 300);
		$(this).css('opacity', 0).text("Read More").stop().animate({
			opacity: 1
		}, 500);
	});

	if ($('.on-now-title').text().length > 130) {
		var onText = $('.on-now-title').text();
		var tmpText = onText.substr(0, 130);
		$('.on-now-title').text(tmpText + "...");
	}

	$('.home-work .grid li, .home-culture .grid li').hover(function() {
		$(this).find('.view-project').stop().delay(330).animate({
			right: 30
		}, 300);
		$(this).find('.color-swatch').stop().animate({
			height: "100%",
			opacity: ".9"
		}, 300, function() {
			// $(this).stop().delay(100).animate({
			// 				boxShadow: '0 0 30px'
			// 			}, 1200);
		});

		$(this).find('.copy').stop().delay(200).animate({
			opacity: 1,
			marginTop: "55%"
		}, 300);
		$(this).find('h3').stop().animate({
			top: -20
		}, 400);
		$(this).find('.arrow').stop().animate({
			right: -60
		}, 300);
	}, function() {
		$(this).find('.view-project').stop().animate({
			"right": -100
		}, 300);
		$(this).find('.color-swatch').stop().animate({
			// boxShadow: '0 0 0',
			opacity: 0
		}, 300, function() {
			$(this).css('height', 0);
		});
		$(this).find('.copy').stop().animate({
			opacity: 0,
			marginTop: "80%"
		}, 300);
		$(this).find('h3').stop().animate({
			top: 0
		}, 300);
		$(this).find('.arrow').stop().delay(200).animate({
			right: 15
		}, 300);
	});

	$('.grid-ext-leader li').hover(function() {
		$(this).find('.view-project').stop().delay(330).animate({
			right: 30
		}, 300);
		$(this).find('.color-swatch').stop().animate({
			height: "100%",
			opacity: ".9"
		}, 200, function() {
			$(this).stop().delay(100).animate({
				boxShadow: '0 0 30px'
			}, 1200);
		});

		$(this).find('.copy').stop().delay(200).animate({
			opacity: 1,
			marginTop: "55%"
		}, 300);
		$(this).find('h3').stop().animate({
			opacity: 1,
			top: -10
		}, 300).addClass('addShadow');
		$(this).find('.arrow').stop().animate({
			right: -60
		}, 300);
	}, function() {
		$(this).find('.view-project').stop().animate({
			"right": -100
		}, 300);
		$(this).find('.color-swatch').stop().animate({
			boxShadow: '0 0 0',
			opacity: 0
		}, 300, function() {
			$(this).css('height', 0);
		});
		$(this).find('.copy').stop().animate({
			opacity: 0,
			marginTop: "80%"
		}, 300);
		$(this).find('h3').stop().animate({
			opacity: 0,
			top: 20
		}, 300).removeClass('addShadow');
		$(this).find('.arrow').stop().delay(200).animate({
			right: 15
		}, 300);
	});

	$('.home-social li').hover(function() {
		$(this).stop().animate({
			backgroundColor: "#25a5aa"
		}, 300);
		$(this).find('p').stop().animate({
			color: "#ffffff"
		}, 300);
	}, function() {
		$(this).stop().animate({
			backgroundColor: "#ffffff"
		}, 300);
		$(this).find('p').stop().animate({
			color: "#383838"
		}, 300);
	});


	$('.add-stream').css('display', 'none');
	$('.wdet-inner').css('height', 0);

	function rollOver() {
		$('.wdet').stop().animate({
			height: 138
		}, 300);
		$('.billboard').stop().animate({
			marginTop: 232
		}, 300);
		$('.google-overlay').stop().animate({
			top: 601
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
		$('.billboard').stop().animate({
			marginTop: 98
		}, 300);
		$('.wdet-inner').stop().animate({
			height: 0
		}, 300);
		$('.google-overlay').stop().animate({
			top: 460
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

	var storeAnchors = $('.homepage-billboard ul li:first-child').find('a');
	$('.homepage-billboard ul').find('a').remove();
	$('.homepage-billboard').append('<div>');
	$(storeAnchors).each(function(index) {
		$('.homepage-billboard div').append(this);
	});

	$('.homepage-billboard div').css({
		'position': 'absolute',
		bottom: -30,
		"cursor": "pointer"
	});

	$('.homepage-billboard ul li').css({
		position: "absolute",
		top: 0, 
		left: 0
	});

	$('.homepage-billboard ul li').css({
		opacity: 0
	});

	$('.homepage-billboard ul li:first-child').css({
		zIndex: 1000,
		opacity: 1
	});

	$('.homepage-billboard div').css({
		zIndex: 1001
	});

	var divX = ($('.homepage-billboard ul').width()-$('.homepage-billboard div').width())/2;
	$('.homepage-billboard div').css({
		left: divX
	});

	$('.homepage-billboard div a').hover(function() {
		if($(this).attr('class') !== "active")
		$(this).stop().animate({color: "#9e0120"}, 300);	
	}, function() {
		if($(this).attr('class') !== "active")
		$(this).stop().animate({color: "#bdbcbc"}, 300);	
	});

	$('.homepage-billboard div a').click(function(e) {
		e.preventDefault();
		clearTimeout(timerCaller);
		changeMeatBall($(this));
	});
	
	var meatballID = 0;
	var meatballs = $('.homepage-billboard div a');
	
	function changeMeatBall(ele) {
	
		meatballID = parseInt($(ele).attr('href').split('_')[1], 10)-1;
		$('.homepage-billboard div a').each(function(index) {
			if($(this).attr('class')==="active") {
				$($(this).attr('href')).animate({opacity: 0}, 200);
			}
		});

		$('.homepage-billboard div a').attr('class', 'off').stop().
		animate({color: "#bdbcbc"}, 300);
		$(ele).attr('class', 'active');
		$(ele).stop().stop().animate({color: "#9e0120"}, 300);
		var idalt = $(ele).attr('href');
		$(idalt).stop().delay(200).animate({opacity: 1}, 500);
	}
	
	var timerCaller;
	
	var delay = function() { 
		changeMeatBall(meatballs[meatballID]); 
		timerCaller = setTimeout(autoMeatballs, 10000);	
	};
	
	setTimeout(autoMeatballs, 0);
	
	function autoMeatballs() {
		meatballID+=1;
		setTimeout(delay, 10000);
		if(meatballID === 4) {
			meatballID = 0;
		}
	}

	$('.homepage-billboard div a').each(function(index) {
		if($(this).attr('class') === "active") {
			$(this).animate({color: "#9e0120"}, 500);
		}
	});

	$(document).ready(function() {

	});
	
	function checkHomePageBillboard() {
		if ($('.homepage-billboard ul li img').height() === 0 || $('.homepage-billboard ul li img').height() === "undefined") {
			setTimeout(checkHomePageBillboard, 100);
	
		} else {
			$('.homepage-billboard ul').height($('.homepage-billboard ul li img').height());		
		}
	}
	
	checkHomePageBillboard();
	
	$('.homepage-billboard ul').height($('.homepage-billboard ul li img').height());

	$('.homepage-billboard div a').click(function(e) {
		//e.preventDefault();
	});

	if ($.cookie("wdet") === "undefined") {
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
	
/*
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
*/
	
	
	
	var width = 0;
	var which = 3;
	
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

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
