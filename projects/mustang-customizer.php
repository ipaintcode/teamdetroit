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

	<title>Mustang Customizer</title>

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

	<link rel="shortcut icon" href="../_/img/favicon.ico">
	<!-- This is the traditional favicon.
		 - size: 16x16 or 32x32
		 - transparency is OK
		 - see wikipedia for info on browser support: http://mky.be/favicon/ -->

	<link rel="apple-touch-icon" href="../_/img/apple-touch-icon.png">
	<!-- The is the icon for iOS's Web Clip.
		 - size: 57x57 for older iPhones, 72x72 for iPads, 114x114 for iPhone4's retina display (IMHO, just go ahead and use the biggest one)
		 - To prevent iOS from applying its styles to the icon name it thusly: apple-touch-icon-precomposed.png
		 - Transparency is not recommended (iOS will put a black BG behind the icon) -->

	<!-- CSS: screen, mobile & print are all in the same file -->
	<link rel="stylesheet" href="../_/css/style.css">

	<!-- all our JS is at the bottom of the page, except for Modernizr. -->
	<script src="../_/js/modernizr-2.0.6.min.js"></script>

</head>

<body>

<div class="wrapper"><!-- not needed? up to you: http://camendesign.com/code/developpeurs_sans_frontieres -->

	<?php include '../header.php'; ?>
	
	<div id="billboard-spacer"></div>
	
	<div class="billboard-wrapper billboard-ext-carousel">
		<ul class="fluidCarousel">
			<li class="activeCarousel"><img src="../_/img/projects/mustang_customizer/billboard-1.jpg" alt=""></li>
			<li class=""><img src="../_/img/projects/mustang_customizer/billboard-2.jpg" alt=""></li>
			<li class=""><img src="../_/img/projects/mustang_customizer/billboard-3.jpg" alt=""></li>												
		</ul>
	</div>

	<div class="segment-headline-wrapper clear">
		<h2 class="center min-max"><span class="segment-header-spacer">Mustang Customizer</span></h2>
		<div class="carousel-navigation center min-max">
			<ul class="carousel-controller">
				<li class="prev-button"><a href="#prev">&larr; Previous</a></li>
				<li class="page-nate"><span class="page-of">1</span> of <span>12</span></li>
				<li class="next-button"><a href="#next">Next &rarr;</a></li>
			</ul>
		</div>
	</div>

	<div class="content-wrapper">

		<div class="content center min-max">

			<section class="content-info-wrapper double">

				<article class="content-info">
					
					<h3>Putting Mustang Design in the Hands of Enthusiasts</h3>
					
					<p>We could have created a forum for people to talk about that Mustang they’ve always dreamed about, but instead we created the ultimate tool for them to build it.</p>
					
					<p>The new Ford Mustang Customizer presented users with a base design for the V6, GT, Boss 302 or Shelby GT 500 and let them run wild with it. From color to hood design to stripes and decals, we gave enthusiasts more ways than ever to make it their own.</p>
					
					<p>And because it’s not the type of car you hide, we made it easy for fans to connect through Facebook to share and store all of their customized Mustangs and encourage others to join in the fun. We also created a battle mode so they could compete against friends for bragging rights and opened it up to voting to let the people decide on the ultimate customized Mustang.</p>
					
					<p>Customizer apps for iPhone and Android allowed fans to build a dream Mustang on the go and ensured that no matter where you were at, you’d never have to back down from a battle.</p>
				
					<ul class="content-info-social">
						<li>Share &rarr;</li>
						<li class="facebook"><a href="#linkedin">Facebook</a></li>
						<li class="twitter"><a href="#linkedin">Twitter</a></li>
						<li class="googleplus"><a href="#linkedin">Google+</a></li>
						<li class="emailit"><a href="#linkedin">Email</a></li>
					</ul>

				</article>
				
			</section>

			<aside class="content-quote-wrapper single">

				<div class="content-quote">

					 <blockquote>
					 	<p>Customers love to make Mustang their own, one that suits their taste; this is the perfect way to let them test out their design and imagine what's possible.</p>
					 	<p class="content-quote-author">&ndash; Jim Owens <span>(Mustang marketing manager)</span></p>
					 </blockquote>
				
				</div>

			</aside>
			
			<ul class="secondary-nav">
				<li class="secondary-nav-prev"><a href="#previous">Previous</a></li>
				<li class="secondary-nav-next"><a href="#next">Next</a></li>
			</ul>
		
		</div>
		
	</div>

	<?php include '../footer.php'; ?>

</div>

<!-- here comes the javascript -->

<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
<script>window.jQuery || document.write("<script src='_/js/jquery-1.7.1.min.js'>\x3C/script>")</script>

<!-- this is where we put our custom functions -->
<script src="../_/js/jquery.shadow-animation.min.js"></script>
<script src="../_/js/jquery.easing.1.3.js"></script>
<script src="../_/js/functions.js"></script>

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