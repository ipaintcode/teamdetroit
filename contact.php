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

	<title>Contact</title>

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
			<div class="inter-holder">
				<ul>
					<li><img src="_/img/contact/reach.png" alt="Billboard 1"></li>
				</ul>
			</div>

		</div>
	</section>

	<div class="headline-wrapper">
		<h2 class="center min-max"><span>Contact</span></h2>
	</div>
	
	<style type="text/css" media="screen">
		.google-overlay {
			position: absolute;
			width: 100%;
			top: 460px;
			left: 612px;
			z-index: 10;
		}
		
		.social-map img {
			height: 600px;
			width: auto;
			opacity: .95;
		}
	</style>
	
	<div class="google-overlay">
		<div class="social-map center min-max">
			<img class="" src="_/img/contact/social_panel.png" alt="Social Panel">
		</div>
	</div>
	<section id="map" class="gmap-ext"></section>

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