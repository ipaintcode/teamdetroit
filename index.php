<!doctype html>

<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. -->

<head id="www-sitename-com" data-template-set="html5-reset">

	<meta charset="utf-8">

	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Team Detroit</title>

	<meta name="title" content="">
	<meta name="description" content="">
	<!-- Google will often use this as its description of your page/site. Make it good. -->

	<meta name="google-site-verification" content="">
	<!-- Speaking of Google, don't forget to set your site up: http://google.com/webmasters -->

	<meta name="author" content="Team Detroit">
	<meta name="Copyright" content="Copyright Team Detroit Here 2011. All Rights Reserved.">

	<!-- Dublin Core Metadata : http://dublincore.org/ -->
	<meta name="DC.title" content="Project Name">
	<meta name="DC.subject" content="What you're about.">
	<meta name="DC.creator" content="Who made this site.">

	<!--  Mobile Viewport Fix
	j.mp/mobileviewport & davidbcalhoun.com/2010/viewport-metatag
	device-width : Occupy full width of the screen in its current orientation
	initial-scale = 1.0 retains dimensions instead of zooming out if page height > device height
	maximum-scale = 1.0 retains dimensions instead of zooming in if page width < device width
	-->
	<!-- Uncomment to use; use thoughtfully!
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	-->

	<link rel="shortcut icon" href="_/img/favicon.ico">
	<!-- This is the traditional favicon.
		 - size: 16x16 or 32x32
		 - transparency is OK
		 - see wikipedia for info on browser support: http://mky.be/favicon/ -->

	<link rel="apple-touch-icon" href="_/img/apple-touch-icon.png">
	<!-- The is the icon for iOS's Web Clip.
		 - size: 57x57 for older iPhones, 72x72 for iPads, 114x114 for iPhone4's retina display (IMHO, just go ahead and use the biggest one)
		 - To prevent iOS from applying its styles to the icon name it thusly: apple-touch-icon-precomposed.png
		 - Transparency is not recommended (iOS will put a black BG behind the icon) -->

	<!-- CSS: screen, mobile & print are all in the same file -->
	<link rel="stylesheet" href="_/css/style_.css">

	<!-- all our JS is at the bottom of the page, except for Modernizr. -->
	<script src="_/js/modernizr-2.0.6.min.js"></script>

</head>

<body>

<div class="wrapper"><!-- not needed? up to you: http://camendesign.com/code/developpeurs_sans_frontieres -->

	<?php include 'header.php'; ?>

	<section class="billboard">
		<div class="center min-max">
			
			<div class="homepage-billboard">
				<ul>
					<li id="billboard_1">
						<img src="_/img/home/billboard_1.png" alt="">
						<a class="active" href="#billboard_1">&middot;</a>
						<a href="#billboard_2">&middot;</a>
						<a href="#billboard_3">&middot;</a>
						<a href="#billboard_4">&middot;</a>
					</li>
					<li id="billboard_2">
						<img src="_/img/home/billboard.png" alt="">
						<a href="#billboard_1">&middot;</a>
						<a href="#billboard_2">&middot;</a>
						<a href="#billboard_3">&middot;</a>
						<a href="#billboard_4">&middot;</a>
					</li>
					<li id="billboard_3">
						<img src="_/img/home/billboard-FocusRally.jpg" alt="">
						<a href="#billboard_1">&middot;</a>
						<a href="#billboard_2">&middot;</a>
						<a href="#billboard_3">&middot;</a>
						<a href="#billboard_4">&middot;</a>
					</li>
					<li id="billboard_4">
						<img src="_/img/home/billboard-CCS.jpg" alt="">
						<a href="#billboard_1">&middot;</a>
						<a href="#billboard_2">&middot;</a>
						<a href="#billboard_3">&middot;</a>
						<a href="#billboard_4">&middot;</a>
					</li>
				</ul>
			</div>

		</div>
	</section>

    <div class="headline-wrapper">
	    <h2 class="center min-max"><span>Work</span></h2>
	</div>

	<section class="home-work">

		<div class="center min-max">

			<!-- <a class="view-all-work" href="work.html">View all work &rarr;</a> -->
			<ol class="grid">
				<li class="double">
					<a href="projects/project.php">
						<h3>Totally Unexpected<br />Press Conference</h3>
						<p class="copy">Testimonials were never this enlightening. Amazing what people will say when they’re suddenly confronted by two dozen “journalists.”</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #4927e3;"></div>
						<img src="_/img/projects/totally_unexpected_press_conference/thumb_large.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="projects/focus-doug.php">
						<h3>Doug The<br />Puppet</h3>
						<p class="copy">Testimonials were never this enlightening. Amazing what people will say when.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						 <div class="color-swatch" style="background: #BF441B;"></div>
						<img src="_/img/projects/focus_doug/thumb.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="projects/lincoln-innovators.php">
						<h3>Lincoln<br />Innovators</h3>
						<p class="copy">Testimonials were never this enlightening.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #8F6B39;"></div>
						<img src="_/img/projects/lincoln_inovators/thumb.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="projects/focus-rally.php">
						<h3>Focus Rally<br />America</h3>
						<p class="copy">Testimonials were never this enlightening. Amazing what people.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #BD0912;"></div>
						<img src="_/img/projects/focus_rally/thumb.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="projects/warrior.php">
						<h3>Be a<br />Machine</h3>
						<p class="copy">Testimonials were never this enlightening.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #6D6588;"></div>
						<img src="_/img/projects/warrior/thumb.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="projects/we-own-work.php">
						<h3>We Own Work</h3>
						<p class="copy">Testimonials were never this enlightening. Amazing what people will say when.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #4C4E4A;"></div>
						<img src="_/img/projects/we_own_work/thumb.jpg" alt="">
					</a>
				</li>
				<li class="double">
					<a href="projects/sports-authority.php">
						<h3>These shoes<br />are Magic.</h3>
						<p class="copy">Testimonials were never this enlightening. Amazing what people will say when they’re suddenly confronted by two dozen “journalists.”</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #257698;"></div>
						<img src="_/img/projects/sports_authority/thumb_large.jpg" alt="">
					</a>
				</li>
			</ol>

		</div>

	</section>

	<div class="headline-wrapper">
	    <h2 class="min-max center"><span>Headlines</span></h2>
	</div>

	<section class="home-social">

		<div class="center min-max">

			<ul class="grid">
				<li class="single">
					<a href="#">
						<p>Selling Ford Around The World, From Detroit.</p>
						<img src="_/img/headlines/nytimes.png" alt="Nytimes">
					</a>
				</li>
				<li class="single vdash-fix">
					<a href="#">
						<p>&ldquo;One of Detroit’s 2010 Top 10 Best Places to Work.&rdquo;</p>
						<img src="_/img/headlines/detfreepress.png" alt="Detfreepress">
					</a>
				</li>
				<li class="single vdash-fix">
					<a href="#">
						<p>&ldquo;Team Detroit is No. 10 on the Ad Agency A-List.&rdquo;</p>
						<img src="_/img/headlines/adage.png" alt="Adage">
					</a>
				</li>
			</ul>

		</div>

	</section>

	<div class="headline-wrapper">
	    <h2 class="min-max center"><span>Culture</span></h2>
	</div>

	<section class="home-culture home-work">

		<div class="center min-max">
			
			<ul class="grid">
				<li class="single">
					<a href="culture/movember.php">
						<h3 class="culture-title">Movember</h3>
						<p class="copy">United for the cause of men’s health, the men of Team Detroit sported a little upper crust during the month of November.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #843853;"></div>
						<img src="_/img/culture/movember/button-Movember.jpg" alt="Bassplayer">						
					</a>
				</li>
				<li class="double">
					<a href="culture/signal_return.php">
						<h3 class="culture-title">Signal<br />Return</h3>
						<p class="copy">A collaboration of local artistes brings the process of print production to the heart of Detroit.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #5C5B53;"></div>
						<img src="_/img/culture/signal_return/Button5_large.jpg" alt="Pink">
					</a>
				</li>
				<li class="single">
					<a href="culture/love_detroit.php">
						<h3 class="culture-title">Love,<br />Detroit</h3>
						<p class="copy">Celebrate the season with free, streamed Holiday tunes from independent Detroit artists.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #d57f57;"></div>
						<img src="_/img/culture/love_detroit/button-LoveDetroit.jpg" alt="">
					</a>
				</li>
				<li class="single">
					<a href="culture/people_mover.php">
						<h3 class="culture-title">People Mover Project.</h3>
						<p class="copy">Musicians, dancers and cooks took over Detroit’s monorail for a day. Result? News crew-worthy entertainment and a nice smoked turkey.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #78b9ba;"></div>
						<img src="_/img/culture/people_mover/button-peoplemover.jpg" alt="Bus">
					</a>
				</li>
				<li class="single">
					<a href="culture/greening_of_detroit.php">
						<h3 class="culture-title">Greening of<br />Detroit</h3>
						<p class="copy">Building a greener city started with a few trees, but today it’s having a real impact in Detroit communities.</p>
						<p class="view-project">View&nbsp;Project</p>
						<span class="arrow">&rarr;</span>
						<div class="color-swatch" style="background: #2D6F2F;"></div>
						<img src="_/img/culture/greening_of_detroit/button-greening.jpg" alt="">
					</a>
				</li>			
			</ul>

		</div>

	</section>

	<div class="headline-wrapper">
		<h2 class="min-max center"><span>Contact</span></h2>
	</div>

	<section id="map" class="gmap large"></section>

	<?php include 'footer.php'; ?>

</div>

<!-- here comes the javascript -->
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>

<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
<script>window.jQuery || document.write("<script src='_/js/jquery-1.6.4.min.js'>\x3C/script>")</script>
<!-- this is where we put our custom functions -->
<script src="_/js/jquery.shadow-animation.min.js"></script>
<script src="_/js/jquery.easing.1.3.js"></script>
<script src="_/js/functions_.js"></script>
<script src="_/js/map.js"></script>

<!-- Asynchronous google analytics; this is the official snippet.
	 Replace UA-XXXXXX-XX with your site's ID and uncomment to enable.

<script>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
-->

</body>
</html>