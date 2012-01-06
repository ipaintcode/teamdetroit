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

	<title>What We Do</title>

	<!-- CSS: screen, mobile & print are all in the same file -->
	<link rel="stylesheet" href="../_/css/style.css">

	<!-- all our JS is at the bottom of the page, except for Modernizr. -->
	<script src="../_/js/modernizr-2.0.6.min.js"></script>

</head>

<body>

<div class="wrapper">

	<?php include '../header.php'; ?>
	
	<div id="billboard-spacer"></div>
	
	<div class="billboard-wrapper billboard-ext-leaders">
		<ul>
			<li><img src="../_/img/aboutus/who_we_are/who_we_are.jpg" alt=""></li>
			<li><img src="../_/img/aboutus/what_we_do/what_we_do.jpg" alt=""></li>
			<li><img src="../_/img/aboutus/what_else_we_do/billboard_1.jpg" alt=""></li>
			<!--http://www.youtube.com/watch?v=S25Isin35i4&feature=youtu.be-->
		</ul>
	</div>

	<div class="segment-headline-wrapper clear">
		<h2 class="center min-max"><span class="segment-header-spacer">What We Do</span></h2>
	</div>

	<div class="content-wrapper">

		<div class="content center min-max clearfix">

			<section class="content-info-wrapper double">

				<div class="content-info content-info-alt">

					<p>The short answer: Look at our client roster. 
					World-class advertising created—with insane dedication—by over one thousand Detroiters, all under one roof. It’s a full-service agency like no other.</p>
					<ul>
						<li>Creative</li>
						<li>Account</li>
						<li>Production</li>
						<li>Strategy</li>
						<li>Human Resources</li>
						<li>Engineering</li>
						<li>QA</li>
						<li>And everything in between.</li>
					</ul><!-- / -->
					
				
					<ul class="content-info-social content-info-social-ext">
						<li>Share &rarr;</li>
						<li class="facebook"><a href="#linkedin">Facebook</a></li>
						<li class="twitter"><a href="#linkedin">Twitter</a></li>
						<li class="googleplus"><a href="#linkedin">Google+</a></li>
						<li class="emailit"><a href="#linkedin">Email</a></li>
					</ul>

				</div>
				
			</section>

			<aside class="content-quote-wrapper single">

				<div class="content-quote">

					 <!--<blockquote>
					 	<p></p>
					 	<p class="content-quote-author"></span></p>
					 </blockquote>-->
					
					<img src="../_/img/aboutus/why_we_love_it.png" alt="Why We Love It">
					<a href="../careers.php?p=weloveit" >&rarr;</a>
				
				</div>

			</aside>
			
			<ul class="secondary-nav">
				<li class="secondary-nav-prev"><a href="who-we-are.php">Previous</a></li>
				<li class="secondary-nav-next"><a href="what-else-we-do.php">Next</a></li>
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

<script>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
  _gaq.push(['_trackPageview', 'teamdetroit:about:What We Do']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>