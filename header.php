<?php
# create and load the HTML
include('simple_html_dom.php');
$html = file_get_html('http://wdetfm.org/listenlive/');

?>
<?php
$page = $_SERVER["REQUEST_URI"];
$parts = Explode('/', $page);
$final = $parts[count($parts) - 1];
$subfinal = $parts[count($parts) - 2];
?>

<header>
	<script type="text/javascript" charset="utf-8">
		var whatever = "<?= $final ?>";
		var sub = "<?= $subfinal ?>";
	</script>
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
				<div class="player-holder"></div>
				<div class="player-holder-htmlfive">
					<audio controls autoplay="autoplay" src="http://141.217.119.35:8000/;&amp;topspeed=on"></audio>
				</div>
			</div>

		</div>
	</div>

	<div class="wdet-icon">
		<div class="center min-max">
			<img class="stream" src="/teamdetroit/_/img/wdet-stream.png" alt="Wdet Stream">
		</div>
	</div>

	<div class="main-nav min-max center">
		<h1 class="teamdetroit"><a class="anchor-tdi" href="/teamdetroit">Team Detroit</a></h1>

		<nav>

			<!-- <ul>
				<li><a href="/teamdetroit/work.php">Work</a></li>
				<li><a href="/teamdetroit/aboutus.php">About Us</a></li>
				<li><a href="/teamdetroit/culture.php">Culture</a></li>
				<li><a href="/teamdetroit/careers.php">Careers</a></li>
				<li><a href="/teamdetroit/contact.php">Contact</a></li> -->
				<?php
				echo '<ul>';

				echo ($final == 'work.php' || $subfinal == 'projects') ? 
				'<li><a class="active-nav anchor-tdi" href="/teamdetroit/work.php">Work</a></li>' :
				'<li><a class="none anchor-tdi" href="/teamdetroit/work.php">Work</a></li>';

				echo ($final == 'aboutus.php' || $subfinal == 'aboutus' || $subfinal == 'leadership') ? 
				'<li><a class="active-nav anchor-tdi" href="/teamdetroit/aboutus.php">About Us</a></li>' :
				'<li><a class="none anchor-tdi" href="/teamdetroit/aboutus.php">About Us</a></li>';

				echo ($final == 'culture.php' || $subfinal == 'culture') ? 
				'<li><a class="active-nav anchor-tdi" href="/teamdetroit/culture.php">Culture</a></li>' :
				'<li><a class="none anchor-tdi" href="/teamdetroit/culture.php">Culture</a></li>';

				echo ($final == 'careers.php') ? 
				'<li><a class="active-nav anchor-tdi" href="/teamdetroit/careers.php">Careers</a></li>' :
				'<li><a class="none anchor-tdi" href="/teamdetroit/careers.php">Careers</a></li>';

				echo ($final == 'contact.php') ? 
				'<li><a class="active-nav anchor-tdi" href="/teamdetroit/contact.php">Contact</a></li>' :
				'<li><a class="none anchor-tdi" href="/teamdetroit/contact.php">Contact</a></li>';

				echo '</ul>';
				?>
			<!-- </ul> -->

		</nav>
	</div>
</header>