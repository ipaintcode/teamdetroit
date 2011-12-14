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
				<?php

				// Print it!
				$items = $html->find('span');
				
				foreach($items as $post) {
					echo $post->innertext;
				}

				?>
				</p>
				<p class="on-now-title">
					<?php

					// Print it!
					$items = $html->find('p');
					
					foreach($items as $post) {
						echo $post->innertext;
					}

					?>
				</p>
			</div>

			<div class="player">
				<div class="player-holder"><audio controls autoplay="autoplay" src=""></audio></div>
			</div>

		</div>
	</div>

	<div class="wdet-icon">
		<div class="center min-max">
			<img class="stream" src="_/img/wdet-stream.png" alt="Wdet Stream">
		</div>
	</div>

	<div class="main-nav min-max center">
		<h1 class="teamdetroit"><a href="/teamdetroit">Team Detroit</a></h1>

		<nav>

			<ul>
				<li><a href="/teamdetroit/work.php">Work</a></li>
				<li><a href="/teamdetroit/aboutus.php">About Us</a></li>
				<li><a href="/teamdetroit/culture.php">Culture</a></li>
				<li><a href="/teamdetroit/careers.php">Careers</a></li>
				<!-- <li><a href="voicebox.php">Voicebox</a></li> -->
				<li><a href="/contact.php">Contact</a></li>
			</ul>

		</nav>
	</div>
</header>