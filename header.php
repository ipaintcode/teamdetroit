<?php
# create and load the HTML
include('simple_html_dom.php');
$html = file_get_html('http://wdetfm.org/listenlive/');

?>


<header>

	<div class="wdet">
		<div class="min-max center wdet-inner">
			<p class="add-stream">Start Listening</p>
			<div class="on-now">
				<p class="on-now-show">
				
				</p>
				<p class="on-now-title">
					
				</p>
			</div>

			<div class="player">
				<div class="player-holder"><audio controls autoplay="autoplay" src=""></audio></div>
			</div>

		</div>
	</div>

	<div class="wdet-icon">
		<div class="center min-max">
			<img class="stream" src="img/wdet-stream.png" alt="Wdet Stream">
		</div>
	</div>

	<div class="main-nav min-max center">
		<h1 class="teamdetroit"><a href="/tdi">Team Detroit</a></h1>

		<nav>

			<ul>
				<li><a href="work.php">Work</a></li>
				<li><a href="aboutus.php">About Us</a></li>
				<li><a href="culture.php">Culture</a></li>
				<li><a href="careers.php">Careers</a></li>
				<!-- <li><a href="voicebox.php">Voicebox</a></li> -->
				<li><a href="contact.php">Contact</a></li>
			</ul>

		</nav>
	</div>
</header>