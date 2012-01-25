(function( $ ){
	
	$.fn.mCarousel = function(options){

		options = jQuery.extend({
			len: undefined,
			width: 0,
			deletedCount: 0,
			tracker: 1,
			animating: false,
			videoActive: false,
			speed: 500,
			w: 0,
			controller: undefined,
			keyControl: true
		}, options);

		if($.browser.msie && parseFloat($.browser.version) < 7){
			options.speed = 0;
		}

		return this.each(function() {
			
			var carousel = $(this);
			
			options.controller.find('.page-nate span').text(carousel.length);
			options.controller.find('.page-nate .page-of').text(1);
			
			$(window).load(function() {

				options.len = carousel.children('li').length-1;

				for (var i = 0; i < options.len+1; i++) {
					carousel.find('li').eq(options.len).clone().prependTo(carousel).removeClass('activeCarousel');
				}
				carousel.find('img').each(function(index) {
					options.width +=$(this).width();
				});
				carousel.width(options.width);
				carousel.css({
					left: (($(window).width()-carousel.find('.activeCarousel').width())/2)-(carousel.find('.activeCarousel').offset().left-carousel.offset().left)
				});	
				var w = ($(window).width()-carousel.width())/2;
				
				function resetCarousel() {
					console.log(carousel.find('.activeCarousel'))
					var windowWidth = ($(window).width() > 960) ? $(window).width() : 960,
						one = (windowWidth-carousel.find('.activeCarousel').width())/2,
						two = carousel.find('.activeCarousel').offset().left-carousel.offset().left;
						
					carousel.stop().animate({
						left: (one-two)
					}, options.speed, function() {
						options.animating = false;
					});
				}
				resetCarousel();
				
				$(window).resize(function(event) {
					resetCarousel();
				});
				
				options.controller.find('.page-nate span').text(options.len+1);
				options.controller.find('.page-nate .page-of').text(options.tracker);
				
				options.controller.find('.next-button').click(function(event) {
					if(!options.animating) {
						goNext();
					}
				});

				options.controller.find('.prev-button').click(function(event) {
					if(!options.animating) {
						goPrevious();

					}
				});
				
				function getScrollTop(){
				    if(typeof pageYOffset!= 'undefined'){
				        //most browsers
				        return pageYOffset;
				    }
				    else{
				        var B= document.body; //IE 'quirks'
				        var D= document.documentElement; //IE with doctype
				        D= (D.clientHeight)? D: B;
				        return D.scrollTop;
				    }
				}
				
				$("body").keydown(function(e) {
					
					var checkY = getScrollTop()-carousel.offset().top;
						
					// checkY < 100 && checkY > -100
									
					if(!options.animating && (options.keyControl === true)) {
						if(e.keyCode === 37) { // left
							goPrevious();
						}
						if(e.keyCode === 39) { // right
							goNext();
						}
						if(e.keyCode === 13 && carousel.find('.activeCarousel .youtube-video-holder').length > 0) { // enter
							if(!options.videoActive) {
								playVideo();
							}
						}
					} else if (!options.animating && (options.keyControl === false)) {
						if (checkY < 300 && checkY > -500) {
							if(e.keyCode === 37) { // left
								goPrevious();
							}
							if(e.keyCode === 39) { // right
								goNext();
							}
							if(e.keyCode === 13 && carousel.find('.activeCarousel .youtube-video-holder').length > 0) { // enter
								if(!options.videoActive) {
									playVideo();
								}
							}
						}
					}
				});
				
				
				function closeVideo(way) {
					animating = true;
					carousel.find('.activeCarousel .close-video').css('display', 'none');
					carousel.find('.activeCarousel img').stop().animate({top: 0}, 300);
					carousel.find('.activeCarousel h4').css({display: 'block', opacity: 0});
					carousel.find('.activeCarousel h4').stop().delay(300).animate({opacity: 1})
					carousel.find('.activeCarousel .youtube-video-holder').stop().animate({top: 420}, 300, function() {
						carousel.find('.activeCarousel .youtube-video-holder').html('');
						carousel.find('.activeCarousel .youtube-video-holder').stop().animate({top: 420}, 300, function() {
							options.animating = false;
							options.videoActive = false;
							if(way === 'next') {
								goNext();
							}
							if(way === 'prev') {
								goPrevious();
							}
						})
					});
				}
				
				function playVideo() {
					options.animating = true;
					options.videoActive = true;
					carousel.find('.activeCarousel img').stop().delay(250).animate({top: -420}, 330);
					carousel.find('.activeCarousel h4').css({display: 'none'});
					carousel.find('.activeCarousel .close-video').css({
					  display: 'block',
					  opacity: 0
					}).animate({opacity: 1}, 300);
					carousel.find('.activeCarousel .youtube-video-holder').stop().delay(250).animate({top: 0}, 300, function() {
						animating = false;
					});
					var w = carousel.find('.activeCarousel .youtube-video-holder').attr('w');
					if (w === undefined) {
						w = carousel.find('.activeCarousel img').width();
					}

					carousel.find('.activeCarousel .youtube-video-holder').html('<iframe id="ytplayer" width="'+w+'" height="420" src="http://www.youtube.com/embed/'+$('.activeCarousel .youtube-video-holder').attr('data')+'?wmode=opaque&autoplay=1&autohide=1&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>');

				}
				
				function playBtnOver() {
					$(this).animate({opacity: .5}, 300);
				}

				function playBtnOut() {
					$(this).animate({opacity: 1}, 300);
				}
				
				function goNext() {

					if(!options.animating) {
						if (options.videoActive) {
							return closeVideo('next');
						} else {
							options.animating = true;

							options.tracker+=1;
							if (options.tracker === options.len+2) {
								options.tracker = 1;
							}
							options.controller.find('.page-nate .page-of').css('opacity', 0).text(options.tracker).stop().animate({opacity: 1}, 300);

							carousel.find('li:last').after(carousel.find('li:first'));
							var x = parseInt(carousel.css('left'), 10);
							carousel.css({
								left: x+carousel.find('li:last').width()
							});
							carousel.find('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');
							resetCarousel();
						}
					}
				}
				
				function goPrevious() {

					if(!options.animating) {
						if (options.videoActive) {
							return closeVideo('prev');
						} else {
							options.animating = true;

							options.tracker-=1;
							if (options.tracker === 0) {
								options.tracker = options.len+1;
							}
							options.controller.find('.page-nate .page-of').css('opacity', 0).text(options.tracker).stop().animate({opacity: 1}, 300);
							
							carousel.find('li:first').before(carousel.find('li:last'));
							var x = parseInt(carousel.css('left'), 10);
							carousel.css({
								left: x-carousel.find('li:first').width()
							});
				carousel.find('.activeCarousel').removeClass('activeCarousel').prev().addClass('activeCarousel');

							resetCarousel();
						}
					}
				}
				
				$(document).on("click", ".activeCarousel .close-video", closeVideo);
				$(document).on("mouseover", ".activeCarousel h4", playBtnOver);
				$(document).on("mouseout", ".activeCarousel h4", playBtnOut);
				$(document).on("click", ".activeCarousel h4", playVideo);
					
				options.controller.find('.next-button, .prev-button, .next-button-stereo, .prev-button-stereo').hover(function() {
					$(this).find('a').stop().animate({opacity: .5}, 300);
				}, function() {
					$(this).find('a').stop().animate({opacity: 1}, 300);
				});	
				
				carousel.animate({opacity: 1}, 500);
			});
		});
	};
	
})( jQuery );