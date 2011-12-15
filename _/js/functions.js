// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

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

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/