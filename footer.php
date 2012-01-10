<footer class="footer fade-second">
	<div class="center min-max">

		<aside class="teamdetroit-facts-box single">
			<div class="facts-inner">
				
				<h6 onselectstart="return false;" ondragstart="return false;">Team Detroit</h6>
				<div onselectstart="return false;" ondragstart="return false;" class="facts-prev">&larr;</div>
				<div onselectstart="return false;" ondragstart="return false;" class="facts-next">&rarr;</div>
				<div onselectstart="return false;" ondragstart="return false;" class="facts-holder">
					<ul>
						<li><img src="/teamdetroit/_/img/footer/04_footer_billboards.jpg" alt="Facts"></li>
						<li><img src="/teamdetroit/_/img/footer/02_footer_billboards.jpg" alt="Facts"></li>
						<li><img src="/teamdetroit/_/img/footer/03_footer_billboards.jpg" alt="Facts"></li>
						<li><img src="/teamdetroit/_/img/footer/01_footer_billboards.jpg" alt="Facts"></li>
						<li><img src="/teamdetroit/_/img/footer/05_footer_billboards.jpg" alt="Facts"></li>
					<ul>
				</div>
				<span class="est-time"><?php
					date_default_timezone_set("America/Detroit"); 

									echo date("g");
		
				 ?>:<?php
					date_default_timezone_set("America/Detroit"); 
									echo date("i");
		
				 ?><sup><?php
					date_default_timezone_set("America/Detroit"); 
					echo date("a");
				?></sup></span>
				<span class="est-weather-temp"><?
$xml = simplexml_load_file('http://www.google.com/ig/api?weather=detroit');
$information = $xml->xpath("/xml_api_reply/weather/forecast_information");
$current = $xml->xpath("/xml_api_reply/weather/current_conditions");
$forecast_list = $xml->xpath("/xml_api_reply/weather/forecast_conditions");
?>
            <?= $current[0]->temp_f['data'] ?>&deg;
            <span class="condition"></span>
            <!-- <?= $current[0]->condition['data'] ?> -->
           </span>
				<span class="est-weather-icon"></span>
			</div>
			
		</aside>
		<ul class="footer-nav double">
			<li class="twentyfive">
				<h5>Work</h5>
				<ul class="large">
					<li><a href="/teamdetroit/projects/sports-authority.php">Sports Authority</a></li>
					<li><a href="/teamdetroit/projects/explorer-live.php">Explorer Live</a></li>
					<li><a href="/teamdetroit/projects/we-own-work.php">We Own Work</a></li>
					<li><a href="/teamdetroit/projects/mustang-customizer.php">Mustang Customizer</a></li>
					<li><a href="/teamdetroit/projects/f150-torture-test.php">F150 Torture Test</a></li>
					<li><a href="/teamdetroit/projects/focus-rally.php">Focus Rally</a></li>
					<li><a href="/teamdetroit/projects/focus-doug.php">Doug, the Ford Spokespuppet</a></li>
					<li><a href="/teamdetroit/projects/mustang.php">Mustang</a></li>
				</ul>
			</li>
			<li class="twentyfive">
				<h5>About Us</h5>
				<ul class="large">
					<li><a href="/teamdetroit/aboutus/who-we-are.php">Who We Are</a></li>
					<li><a href="/teamdetroit/aboutus/what-we-do.php">What We Do</a></li>
					<li><a href="/teamdetroit/aboutus/what-else-we-do.php">How We Do It</a></li>
					<li><a href="/teamdetroit/aboutus.php?p=leaders">Leadership</a></li>
					<li><a href="/teamdetroit/aboutus.php?p=leaders">Privacy Policy</a></li>
				</ul>
			</li>
			<li class="twentyfive">
				<h5>Culture</h5>
				<ul class="large">
					<li><a href="/teamdetroit/culture/people_mover.php">People Mover</a></li>
					<li><a href="/teamdetroit/culture/love_detroit.php">Love, Detroit</a></li>
					<li><a href="/teamdetroit/culture/greening_of_detroit.php">Greening of Detroit</a></li>
					<li><a href="/teamdetroit/culture/movember.php">Our Epic Movember</a></li>
					<li><a href="/teamdetroit/culture/motorcity_pride.php">Motorcity Pride</a></li>
					<li><a href="/teamdetroit/culture/signal_return.php">Signal Return</a></li>
					<li><a href="/teamdetroit/culture.php">Stereo 550</a></li>
				</ul>
			</li>
			<li class="twentyfive">
				<h5>Contact</h5>
				<ul class="large">
					<li><a href="mailto:andrea.scott@teamdetroit.com">Public Relations</a></li>
					<li><a href="mailto:brad.audet@teamdetroit.com">Business Opportunity</a></li>
					<li><a href="mailto:human.resources@teamdetroit.com">Career Information</a></li>
					<li><a href="http://www.facebook.com/?sk=fl_1768452991467">Facebook</a></li>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Google+</a></li>
				</ul>
			</li>
		</ul>
	</div>
</footer>