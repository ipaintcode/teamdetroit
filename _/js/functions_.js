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
	
	function updateTime() {
		$.post('/time.php', function(data) {
			$('.est-time').html(data)
		});
		setTimeout(updateTime, 5000);
	}
	
	updateTime();
	
	$('.footer a').hover(function() {
		$(this).stop().animate({color: "#ED1B2E"}, 200);
	}, function() {
		$(this).stop().animate({color: "#DBDADA"}, 200);
	});

	$('.main-nav li a').hover(function() {
		$(this).stop().animate({color: "black"}, 200);
	}, function() {
		if($(this).hasClass('active-nav')) {
			$(this).stop().animate({color: "black"}, 200);
		} else {
			$(this).stop().animate({color: "#939598"}, 200);
		}
	});

	var factsAt = 0;

	$('.facts-inner ul li').each(function(index) {
		$(this).css('left', index*259)
	});

	$('.facts-prev, .facts-next').css({"cursor": "pointer"})
	.hover(function() {
		$(this).stop().animate({opacity: ".5"}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 300);
	});

	$('.facts-prev, .facts-next, .facts-inner ul li').click(function(event) {
		var len = ($('.facts-inner ul li').length)
		var way = ($(this).attr('class'));
		if (way === "facts-prev") {
			factsAt -= 1;
			if (factsAt === -1) {
				factsAt = len-1;
			}
			
			$('.facts-holder ul').stop().animate({
				left: parseInt((factsAt*259)*-1, 10),
				opacity: ".99"
			}, 300);	
		} else {
			factsAt += 1;
			if (factsAt === len) {
				factsAt = 0;
			}
			$('.facts-holder ul').stop().animate({
				left: parseInt((factsAt*259)*-1, 10),
				opacity: ".99"
			}, 300);
		}
	});
	$('a[href="#work"]').hover(function() {
		$(this).stop().animate({opacity: ".5"}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 300);
	});
	$('a[href="#work"]').click(function(event) {
		var tAnchor = $(this).offset().top;
		$('html,body').stop().delay(100).animate({
			scrollTop: tAnchor-58
		}, 300);
	});

	$('.view-more-work').hover(function() {
		$(this).stop().animate({color: "black"}, 300);
	}, function() {
		$(this).stop().animate({color: "#990000"}, 300);
	});
	
	var getAnchor = window.location.href.split("=")[1];
	
	if(getAnchor == 'leaders') {
		$('html,body').stop().delay(100).animate({
			scrollTop: 1630
		}, 0);
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
	});
	$(window).scroll(function(event) {

		if ($(window).scrollTop() > 0) {
			$('#go-back-up').stop().animate({right: 0}, 300);
		} else {
			$('#go-back-up').stop().animate({right: -40}, 300);
		}
	});
	
	$('#go-back-up').hover(function() {
		$(this).stop().animate({opacity: ".8"}, 300);
	}, function() {
		$(this).stop().animate({opacity: 1}, 0);
	});
	
	$('#go-back-up').click(function(event) {
		goToByScroll(0, 500);
	});
	
	
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
			
			
			$('body').stop().animate({
				'backgroundColor': '#C80535'
			}, 300, function() {
				$('.friends-list').html('<img src="_/img/aboutus/friends-list.png" alt="Friends List">');
				$('.friends-list').stop().animate({
					opacity: 1
				}, 500);
			});
			
			$(window).scrollTop(0);
			$('.friends-list').mousedown(function(e) {
				$('.friends-list').stop().animate({
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

	function goToByScroll(val, speed) {
		$('html,body').animate({
			scrollTop: val
		}, speed || 200);
	}
	var getAnchor = window.location.href.split("=")[1];
	
	if(getAnchor == 'leaders') {
		$('html,body').stop().delay(100).animate({
			scrollTop: 1630
		}, 0);
	}
	
	if(getAnchor == 'weloveit') {
		$('html,body').stop().delay(100).animate({
			scrollTop: 1031
		}, 0);
	}
	
	var clickedJob = "undefined";

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

		goToByScroll($(this).parent().parent().parent().attr('val'), 300);
	}, function(e) {
	
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

	$('ol.grid-ext-leader li').hover(function() {
		$(this).find('img').stop().animate({opacity: .1}, 300);
		$(this).find('.color-swatch-leader').stop().animate({
			height: "100%",
			opacity: ".9"
		}, 200, function() {
			$(this).css('height', '100%')
		});
		$(this).find('h3').stop().animate({
			opacity: 1,
			top: 18
		}, 300);
	}, function() {
		$(this).find('img').stop().animate({opacity: 1}, 300);
		$(this).find('.color-swatch-leader').stop().animate({
			opacity: 0
		}, 300, function() {
			$(this).css('height', 0);
		});
		$(this).find('h3').stop().animate({
			opacity: 0,
			top: 60
		}, 300);
	});

	$('.next-button-stereo, .prev-button-stereo').hover(function() {
		$(this).find('a').stop().animate({opacity: ".5"}, 300);
	}, function() {
		$(this).find('a').stop().animate({opacity: 1}, 300);
	});

	$('.home-social li').hover(function() {
		$(this).stop().animate({
			backgroundColor: "#25a5aa"
		}, 300);
		$(this).find('p').stop().animate({
			color: "#ffffff"
		}, 300);
		$(this).find('.news').stop().animate({
			opacity: 0
		}, 100, function() {
			$(this).stop().animate({
				'background-position-y': "-26"
			}, 0, function() {
				$(this).stop().animate({opacity: 1}, 100);
			});
			
		});
		$(this).find('.news-ext').stop().animate({
			opacity: 0
		}, 100, function() {
			$(this).stop().animate({
				'background-position-y': "-44"
			}, 0, function() {
				$(this).stop().animate({opacity: 1}, 100);
			});
			
		});
	}, function() {
		$(this).stop().animate({
			backgroundColor: "#ffffff"
		}, 300);
		$(this).find('p').stop().animate({
			color: "#383838"
		}, 300);
		$(this).find('.news, .news-ext').stop().animate({
			opacity: 0
		}, 100, function() {
			$(this).stop().animate({
				'background-position-y': "0"
			}, 0, function() {
				$(this).stop().animate({opacity: 1}, 200);
			});
		});
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
			height: 0
		}, 300);
		$('.add-stream').css('display', 'none');
		$('.billboard').stop().animate({
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

	$('a').click(function(ele) {
		if($(this).attr('href').indexOf("#billboard_") !== 0) {
			ele.preventDefault();
			var url = $(this).attr('href');
			if ($(this).hasClass('anchor-tdi')) {
				$('.wrapper').stop().animate({
					opacity: 0
				}, 500, function() {
					_gaq.push(['_trackEvent','teamdetroit','exits', window.location]);
					window.location.href = url;
				});
			} else if (url === "#social-link") {
				var social = ($(this).parent().attr('class'));
				if (social === "facebook") {
				window.open("http://www.facebook.com/sharer/sharer.php?u="+location.href, '_blank');
				} else if (social === "twitter") {
					window.open("https://twitter.com/intent/tweet?original_referer=http://www.teamdetroit.com/&text="+$("title").text().replace("|", "-")+"+&url="+location.href+"/&hashtags=teamdetroit", '_blank');	
				} else if (social === "googleplus") {
					window.open("https://plusone.google.com/_/+1/confirm?hl=en&url="+location.href, '_blank');
				} else if (social === "emailit") {
					window.location.href = "mailto:?subject=Check it out: "+$("title").text().replace("|", "-")+"&body="+location.href;
				}
			} else if(url.indexOf("mailto") === 0) {
				window.location.href = url;
			} else if(url.indexOf("#") < 0) {
				_gaq.push(['_trackEvent','teamdetroit','exits', window.location]);
				window.open(url, '_blank');
			}
		}
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
	
	function wdetPlayer() {
		var audio = '<audio controls autoplay="autoplay" src="http://141.217.119.35:8000/;&amp;topspeed=on"></audio>';
		var flash = "<embed src='http://www.shoutcast.com/media/popupPlayer_V19.swf?stationid=http://yp.shoutcast.com/sbin/tunein-station.pls?id=307298&play_status=1' quality='high' bgcolor='#ffffff' width='398' height='104' name='popupPlayer_V19' align='middle' allowScriptAccess='always' allowFullScreen='true' type='application/x-shockwave-flash' pluginspage='http://www.adobe.com/go/getflashplayer' ></embed>"
		if ($.cookie("wdet") === "0") {
			$('.player-holder').html("");
			$('.add-stream').css('opacity', 0).text('Start Listening').stop().animate({
				opacity: 1
			}, 500);
		} else {
			if ($.browser.msie === true || $.browser.mozilla === true) {
				$('.player-holder').html(flash);
			} else {
				$('.player-holder').html(audio);
				var video = document.getElementsByTagName("audio")[0];
				video.play();
			}

			$('.add-stream').css('opacity', 0).text('Stop Listening').stop().animate({
				opacity: 1
			}, 500);
		}
	}
	wdetPlayer();

	var width = 0;
	var which = 3;
	
	$('.home-work .grid li, .home-culture .grid li').each(function(index) {
		$(this).find('.grid-copy').css({
			opacity: 0
		});
	});

		$('.home-work .grid li, .home-culture .grid li').hover(function() {
			$(this).find('.view-project').stop().animate({
				right: -80
			}, 300, function() {
				$(this).find('.arrow').css('display', 'none');
				$(this).find('.view-project-text').css('display', 'block');
				$(this).css('opacity', 0);
				$(this).stop().animate({right: 35, opacity: 1}, 300);
			});
			
			$(this).find('.color-swatch').stop().animate({
				height: $(this).find('img').height(),
				opacity: ".9"
			}, 300);
			
			$(this).find('.copy').stop().delay(200).animate({
				opacity: 1,
				marginTop: 5
			}, 300);
			
			$(this).find('.grid-copy').stop().animate({
				marginTop: $(this).find('.grid-copy').attr('overValue')-10
			}, 400);
		}, function() {
			$(this).find('.view-project').stop().animate({
				right: -80
			}, 300, function() {
				$(this).find('.arrow').css('display', 'block');
				$(this).find('.view-project-text').css('display', 'none');
				$(this).stop().animate({right: 15, opacity: 1}, 300);
			});
			$(this).find('.color-swatch').stop().animate({
				opacity: 0
			}, 300, function() {
				$(this).css('height', 0);
			});
			
			$(this).find('.copy').stop().animate({
				opacity: 0,
				marginTop: 30
			}, 300);
			$(this).find('.grid-copy').stop().animate({
				marginTop: $(this).find('.grid-copy').attr('offValue')
			}, 300);
		});
			$('ol.grid-ext-leader li h3').css({opacity: 0});
	$(window).load(function() {
		$('.home-work .grid li, .home-culture .grid li').each(function(index) {
			
			var liTagH = $(this).height();
			var hTagH = $(this).find('h3').height();
			var val = ((liTagH-hTagH)/2)-20;

			$(this).find('.grid-copy').css({
				marginTop: val
			});
			$(this).find('.grid-copy').attr({
				offValue: val,
				overValue: ((liTagH-$(this).find('.grid-copy').height())/2)
			});

			$(this).find('.copy').css({
				opacity: 0,
				marginTop: 50
			});
			$(this).find('.grid-copy').animate({
				opacity: 1
			}, 300);

			$('.grid li h3').stop().animate({opacity: 1}, 200, function() {
			$('ol.grid-ext-leader li h3').css({opacity: 0});
			});
		});
	});

});

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
