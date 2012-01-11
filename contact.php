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

	<!-- Main meta - description : content -->
    <meta name="description" content="Team Detroit contact information. New Business? PR? Prospective Employee? Here's how to get in touch." />

	<title>Contact Team Detroit | TeamDetroit.com</title>

	<link rel="stylesheet" href="_/css/style_.css">

	<!-- all our JS is at the bottom of the page, except for Modernizr. -->
	<script src="_/js/modernizr-2.0.6.min.js"></script>

</head>

<body>

<div class="wrapper">

	<?php include 'header.php'; ?>

	<section class="billboard">
		<div class="center min-max">

			<ul>
				<a href="#work">See Down Below!</a>
				<li><img src="_/img/contact/reach.png" alt=""></li>
			</ul>

		</div>
	</section>

	<div class="headline-wrapper">
		<h2 class="center min-max"><span>Our Location</span></h2>
	</div>
	
	<div class="google-overlay">
		<div class="social-map center min-max">
			<div class="social-map-inner">

				<div>
					<h5>Team Detroit</h5>
					<p>550 Town Center Dr</p>
					<p>Dearborn, MI 48216</p>
				</div>
				<section class="clearfix">
					<h6>Public Relations</h6>
					<a href="mailto:andrea.scott@teamdetroit.com">andrea.scott@teamdetroit.com</a>
					<span>(313)615-3159</span>
				
					<h6>Business Opportunities</h6>
					<a href="mailto:brad.audet@teamdetroit.com">brad.audet@teamdetroit.com</a>
					<span>(313)615-3159</span>
				
					<h6>Career Information</h6>
					<a href="mailto:human.resources@teamdetroit.com">human.resources@teamdetroit.com</a>
					<ul class="content-info-social">
						<li></li>
						<li class="facebook"><a href="#linkedin">Facebook</a></li>
						<li class="twitter"><a href="#linkedin">Twitter</a></li>
						<li class="googleplus"><a href="#linkedin">Google+</a></li>
						<li class="emailit"><a href="#linkedin">Email</a></li>
					</ul>
				</section>
			</div>
		</div>
	</div>
	<section id="map" class="gmap-ext" data="small"></section>

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

<script>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
  _gaq.push(['_trackPageview', 'teamdetroit:contact'])

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>