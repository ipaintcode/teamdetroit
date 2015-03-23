<?php
	$page = $_SERVER["REQUEST_URI"];
	$parts = Explode('/', $page);
	$final = $parts[count($parts) - 1];
	$subfinal = $parts[count($parts) - 2];
?>
<header>
	
	<div class="wdet">
		<div class="min-max center wdet-inner">
			<p class="add-stream">Start Listening</p>
			<div class="on-now">
				<p class="on-now-show">
					Alpha 
				</p>
				<p class="on-now-title">
					Electronic Music + Progressive Soul from Detroit. ALPHA is a collection of highly distinctive, auteur-driven original mixes from <span class="red"> WDET</span>, Ghostly International, Paxahau and StudioFeed.
				</p>
			</div>

			<div class="player">
				<div class="player-holder"></div>
				<div class="player-holder-htmlfive">
					<audio controls autoplay="autoplay" src="http://141.217.119.14:8000/AlphaMain"></audio>
				</div>
			</div>

		</div>
	</div>

	<div class="wdet-icon">
		<div class="center min-max">
			<img class="stream" src="/_/img/wdet-stream.png" alt="Wdet Stream">
		</div>
	</div>

	<div class="main-nav min-max center">
		<h1 class="teamdetroit"><a class="anchor-tdi" href="/">Team Detroit</a></h1>

		<nav>

			<?php
			echo '<ul>';

			echo ($final == 'work.php' || $subfinal == 'projects') ? 
			'<li><a class="active-nav anchor-tdi" href="/work.php">Work</a></li>' :
			'<li><a class="none anchor-tdi" href="/work.php">Work</a></li>';

			echo ($final == 'aboutus.php' || $subfinal == 'aboutus' || $subfinal == 'leadership') ? 
			'<li><a class="active-nav anchor-tdi" href="/aboutus.php">About Us</a></li>' :
			'<li><a class="none anchor-tdi" href="/aboutus.php">About Us</a></li>';

			echo ($final == 'culture.php' || $subfinal == 'culture') ? 
			'<li><a class="active-nav anchor-tdi" href="/culture.php">Culture</a></li>' :
			'<li><a class="none anchor-tdi" href="/culture.php">Culture</a></li>';

			echo ($final == 'careers.php') ? 
			'<li><a class="active-nav anchor-tdi" href="/careers.php">Careers</a></li>' :
			'<li><a class="none anchor-tdi" href="/careers.php">Careers</a></li>';

			echo ($final == 'contact.php') ? 
			'<li><a class="active-nav anchor-tdi" href="/contact.php">Contact</a></li>' :
			'<li><a class="none anchor-tdi" href="/contact.php">Contact</a></li>';

			echo '</ul>';
			?>
				
		</nav>
	</div>
</header>