// remap jQuery to $
(function($) {})(window.jQuery);

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
            options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''
        ].join(''));
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
        $.get('/time.php', function(data) {
            $('.est-time').html(data);
        });
        setTimeout(updateTime, 5000);
    }

    updateTime();

    var getAnchor = window.location.href.split("=")[1];

    if (getAnchor == 'leaders') {
        $('html,body').stop().delay(100).animate({
            scrollTop: 1630
        }, 0);
    }

    if (getAnchor == 'weloveit') {
        $('html,body').stop().delay(100).animate({
            scrollTop: 1630
        }, 0);
    }

    $('.footer a').hover(function() {
        $(this).stop().animate({
            color: "#ED1B2E"
        }, 200);
    }, function() {
        $(this).stop().animate({
            color: "#DBDADA"
        }, 200);
    });

    $('.main-nav li a').hover(function() {
        $(this).stop().animate({
            color: "black"
        }, 200);
    }, function() {
        if ($(this).hasClass('active-nav')) {
            $(this).stop().animate({
                color: "black"
            }, 200);
        } else {
            $(this).stop().animate({
                color: "#939598"
            }, 200);
        }
    });

    $('.content-info-social li, .secondary-nav li').hover(function() {
        if ($(this).text() !== "Share →") {
            $(this).stop().animate({
                opacity: ".5"
            }, 300);
        }

    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 300);
    });

    if ($('.on-now-title').text().length > 172) {
        var onText = $('.on-now-title').text();
        var tmpText = onText.substr(0, 172);
        $('.on-now-title').text(tmpText + "...");
    }

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
            height: 0
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
        if (isiPhone()) {
            rollOut();
        }
    });

    function isiPhone() {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    }

    var audioTag = document.getElementsByTagName("audio")[0];
    audioTag.src = "undefined";

    function wdetPlayer() {
        var stream = 'http://wdet.streamguys1.com/live-aac';

        if ($('html').hasClass('audio')) {
            if ($.cookie("wdet") === "0") {
                audioTag.src = "undefined";
                $('.add-stream').css('opacity', 0).text('Start Listening').stop().animate({
                    opacity: 1
                }, 500);
            } else {
                audioTag.src = stream;
                audioTag.play();
                $('.add-stream').css('opacity', 0).text('Stop Listening').stop().animate({
                    opacity: 1
                }, 500);
            }
        } else {
            $('.on-now-show').text('Flash Not Supported');
            $('.on-now-title').text('Please use Chrome, Firefox or Safari!')
        }
    }

    wdetPlayer();

    $('.gridbox, .close-video, .content-quote a').hover(function() {
        $(this).stop().animate({
            opacity: ".5"
        }, 300);
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 300);
    });

    $('a').click(function(ele) {
        if ($(this).attr('href').indexOf("#billboard_") !== 0) {
            ele.preventDefault();
            var url = $(this).attr('href');
            if ($(this).hasClass('anchor-tdi')) {
                $('.wrapper').stop().animate({
                    opacity: 0
                }, 500, function() {
                    _gaq.push(['_trackEvent', 'teamdetroit', 'exits', window.location]);
                    window.location.href = url;
                });
            } else if (url === "#social-link") {
                var social = ($(this).parent().attr('class'));
                if (social === "facebook") {
                    _gaq.push(['_trackEvent', 'teamdetroit', 'onclick', 'fshare']);
                    window.open("http://www.facebook.com/sharer/sharer.php?u=" + location.href, '_blank');
                } else if (social === "twitter") {
                    window.open("https://twitter.com/intent/tweet?original_referer=http://www.teamdetroit.com/&text=" + $("title").text().replace("|", "-") + "+&url=" + location.href + "/&hashtags=teamdetroit", '_blank');
                } else if (social === "googleplus") {
                    _gaq.push(['_trackEvent', 'teamdetroit', 'onclick', 'googleplus']);
                    window.open("https://plusone.google.com/_/+1/confirm?hl=en&url=" + location.href, '_blank');
                } else if (social === "emailit") {
                    window.location.href = "mailto:?subject=Check it out: " + $("title").text().replace("|", "-") + "&body=" + location.href;
                }
            } else if (url.indexOf("mailto") === 0) {
                if ($(this).parent().parent().hasClass('job-content')) {
                    var str = ($(this).parent().parent().parent().find('h5').text().replace("Location: Dearborn", ""));
                    _gaq.push(['_trackEvent', 'teamdetroit', 'career', str]);
                }
                window.location.href = url;
            } else if (url.indexOf("#") < 0) {
                _gaq.push(['_trackEvent', 'teamdetroit', 'exits', window.location]);
                window.open(url, '_blank');
            }
        }
    });

    var width = 0;
    var which = 3;

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)')
            .exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    $(window).load(function() {

        var getSlide = getParameterByName('slide');
        var deletedCount = 0;
        var tracker = 1;
        var animating = false,
            videoActive = false;

        $('.fluidCarousel li img').each(function(index) {
            width += $(this).width();
        });
        $('.fluidCarousel').width(width);
        var w = ($(window).width() - $('.fluidCarousel').width()) / 2;

        // ((windownWidth-$('.activeCarousel').width())/2)-($('.activeCarousel').offset().left-$('.fluidCarousel').offset().left)

        function resetCarousel(speed) {
            var speed = (speed === "undefined") ? 500 : speed;
            var windownWidth = ($(window).width() > 960) ? $(window).width() : 960,
                one = (windownWidth - $('.activeCarousel').width()) / 2,
                two = $('.activeCarousel').offset().left - $('.fluidCarousel').offset().left;

            $('.fluidCarousel').stop().animate({
                left: (one - two)
            }, speed, function() {
                animating = false;
            });
        }

        $(window).resize(function(event) {
            resetCarousel();
        });

        var len = $('.fluidCarousel li').length - 1;

        $('.page-nate span').text(len + 1);
        $('.page-nate .page-of').text(tracker);

        $('.next-button').click(function(event) {
            if (!animating) {
                goNext();
            }
        });

        $('.prev-button').click(function(event) {
            if (!animating) {
                goPrevious();

            }
        });

        $("body").keydown(function(e) {
            if (!animating) {
                if (e.keyCode === 37) { // left
                    goPrevious();
                }
                if (e.keyCode === 39) { // right
                    goNext();
                }
                if (e.keyCode === 13 && $('.activeCarousel .youtube-video-holder').length > 0) { // enter
                    if (!videoActive) {
                        playVideo();
                    }
                }
            }
        });


        $(document).on("click", ".activeCarousel .close-video", closeVideo);

        function closeVideo(way) {
            animating = true;
            $('.activeCarousel .close-video').css('display', 'none');
            $('.activeCarousel img').stop().animate({
                top: 0
            }, 300);
            $('.activeCarousel h4').css({
                display: 'block',
                opacity: 0
            });
            $('.activeCarousel h4').stop().delay(300).animate({
                opacity: 1
            });
            $('.activeCarousel .youtube-video-holder').stop().animate({
                top: 420
            }, 300, function() {
                $('.activeCarousel .youtube-video-holder').html('');
                $('.activeCarousel .youtube-video-holder').stop().animate({
                    top: 420
                }, 300, function() {
                    animating = false;
                    videoActive = false;
                    if (way === 'next') {
                        goNext();
                    }
                    if (way === 'prev') {
                        goPrevious();
                    }
                });
            });
        }

        $(document).on("mouseover", ".activeCarousel h4", playBtnOver);
        $(document).on("mouseout", ".activeCarousel h4", playBtnOut);
        $(document).on("click", ".activeCarousel h4", playVideo);
        $(document).on("touchstart", ".activeCarousel h4", playVideo);

        function playBtnOver() {
            $(this).stop().animate({
                opacity: ".5"
            }, 300);
        }

        function playBtnOut() {
            $(this).stop().animate({
                opacity: 1
            }, 300);
        }

        function playVideo() {
            animating = true;
            videoActive = true;
            $('.activeCarousel img').stop().delay(250).animate({
                top: -420
            }, 330);
            $('.activeCarousel h4').css({
                display: 'none'
            });
            $('.activeCarousel .close-video').css({
                display: 'block',
                opacity: 0
            }).animate({
                opacity: 1
            }, 300);
            $('.activeCarousel .youtube-video-holder').stop().delay(250).animate({
                top: 0
            }, 300, function() {
                animating = false;
            });
            var w = $('.activeCarousel .youtube-video-holder').attr('w');
            if (w === undefined) {
                w = $('.activeCarousel img').width();
            }

            var yt = "http://www.youtube.com/embed/" + $('.activeCarousel .youtube-video-holder').attr("data").toString();
            $('.activeCarousel .youtube-video-holder').html('<iframe id="ytplayer" width="' + w + '" height="420" src="' + yt + '?wmode=opaque&autoplay=1&autohide=1&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>');
            _gaq.push(['_trackEvent', 'teamdetroit', 'video', yt]);
        }

        $('.next-button, .prev-button, .next-button-stereo, .prev-button-stereo').hover(function() {
            $(this).find('a').stop().animate({
                opacity: ".5"
            }, 300);
        }, function() {
            $(this).find('a').stop().animate({
                opacity: 1
            }, 300);
        });

        for (var i = 0; i < len + 1; i++) {
            $('.fluidCarousel li').eq(len).clone().prependTo('.fluidCarousel').removeClass('activeCarousel');
        }
        $('.fluidCarousel li img').each(function(index) {
            width += $(this).width();
        });
        $('.fluidCarousel').width(width);
        $('.fluidCarousel').css({
            left: (($(window).width() - $('.activeCarousel').width()) / 2) - ($('.activeCarousel').offset().left - $('.fluidCarousel').offset().left)
        });

        function goNext() {

            if (!animating) {
                if (videoActive) {
                    return closeVideo('next');
                } else {
                    animating = true;

                    tracker += 1;
                    if (tracker === len + 2) {
                        tracker = 1;
                    }
                    $('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({
                        opacity: 1
                    }, 300);

                    $('.fluidCarousel li:last').after($('.fluidCarousel li:first'));
                    var x = parseInt($('.fluidCarousel').css('left'), 10);
                    $('.fluidCarousel').css({
                        left: x + $('.fluidCarousel li:last').width()
                    });
                    $('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');

                    resetCarousel('next');
                }
            }
        }

        function goPrevious() {
            if (!animating) {
                if (videoActive) {
                    return closeVideo('prev');
                } else {
                    animating = true;

                    tracker -= 1;
                    if (tracker === 0) {
                        tracker = len + 1;
                    }
                    $('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({
                        opacity: 1
                    }, 300);

                    $('.fluidCarousel li:first').before($('.fluidCarousel li:last'));
                    var x = parseInt($('.fluidCarousel').css('left'), 10);
                    $('.fluidCarousel').css({
                        left: x - $('.fluidCarousel li:first').width()
                    });
                    $('.activeCarousel').removeClass('activeCarousel').prev().addClass('activeCarousel');

                    resetCarousel('previous');
                }
            }
        }

        function automate(speed) {
            tracker += 1;
            if (tracker === len + 2) {
                tracker = 1;
            }
            $('.page-nate .page-of').css('opacity', 0).text(tracker).stop().animate({
                opacity: 1
            }, 300);

            $('.fluidCarousel li:last').after($('.fluidCarousel li:first'));
            var x = parseInt($('.fluidCarousel').css('left'), 10);
            $('.fluidCarousel').css({
                left: x + $('.fluidCarousel li:last').width()
            });
            $('.activeCarousel').removeClass('activeCarousel').next().addClass('activeCarousel');

            resetCarousel(speed);
        }

        $('.billboard-ext-carousel ul').stop().animate({
            opacity: 1
        }, 500, function() {
            if (getSlide !== null) {
                if (!isNaN(getSlide) && parseInt(getSlide) <= len + 1) {
                    for (var i = 0; i < getSlide - 1; i++) {
                        automate(500 * (getSlide * .15) + 500);
                    };
                }
            }
        });

    });

    var factsAt = 0;

    $('.facts-inner ul li').each(function(index) {
        $(this).css('left', index * 259)
    });

    $('.facts-prev, .facts-next').css({
            "cursor": "pointer"
        })
        .hover(function() {
            $(this).stop().animate({
                opacity: ".5"
            }, 300);
        }, function() {
            $(this).stop().animate({
                opacity: 1
            }, 300);
        });

    $('.facts-prev, .facts-next, .facts-inner ul li').click(function(event) {
        var len = ($('.facts-inner ul li').length)
        var way = ($(this).attr('class'));
        if (way === "facts-prev") {
            factsAt -= 1;
            if (factsAt === -1) {
                factsAt = len - 1;
            }

            $('.facts-holder ul').stop().animate({
                left: parseInt((factsAt * 259) * -1, 10),
                opacity: ".99"
            }, 300);
        } else {
            factsAt += 1;
            if (factsAt === len) {
                factsAt = 0;
            }
            $('.facts-holder ul').stop().animate({
                left: parseInt((factsAt * 259) * -1, 10),
                opacity: ".99"
            }, 300);
        }
    });

    function goToByScroll(val, speed) {
        $('html,body').animate({
            scrollTop: val
        }, speed || 200);
    }

    $('body').prepend('<div id="go-back-up"></div>');
    $('#go-back-up').css({
        'background-image': 'url(/_/img/up-arrow.png)',
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
            $('#go-back-up').stop().animate({
                right: 0
            }, 300);
        } else {
            $('#go-back-up').stop().animate({
                right: -40
            }, 300);
        }
    });

    $('#go-back-up').hover(function() {
        $(this).stop().animate({
            opacity: ".8"
        }, 300);
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 0);
    });

    $('#go-back-up').click(function(event) {
        goToByScroll(0, 500);
    });
});

$(window).load(function() {
    $('.home-work .grid li, .home-culture .grid li').each(function(index) {

        var liTagH = $(this).height();
        var hTagH = $(this).find('h3').height();
        var val = ((liTagH - hTagH) / 2) - 20;

        $(this).find('.grid-copy').css({
            marginTop: val
        });
        $(this).find('.grid-copy').attr({
            offValue: val,
            overValue: ((liTagH - $(this).find('.grid-copy').height()) / 2)
        });

        $(this).find('.copy').css({
            opacity: 0,
            marginTop: 50
        });

        $('.grid li h3').stop().animate({
            opacity: 1
        }, 200, function() {
            $('ol.grid-ext-leader li h3').css({
                opacity: 0
            });
        });
    });
});

/* optional triggers



$(window).resize(function() {
	
});

*/
