// Need to create a Module Pattern called; GMAPS and only init it on pages that have map
$(document).ready(function() {
	
	function buildMap(img, nLng) {
		var lat = 42.315118;
		var lng = nLng;
		var latlng = new google.maps.LatLng(lat, lng);
		// Creating an object literal containing the properties we want to pass to the map
		var options = {
			zoom: 15,
			center: latlng,
			scrollwheel: false,
			panControl: false,
			rotateControl: false,
			scaleControl: false,
			zoomControl: false,
		  	mapTypeControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DEFAULT
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
			
		};
		
		// Calling the constructor, thereby initializing the map
		var map = new google.maps.Map(document.getElementById('map'), options);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: 'Team Detroit',
			clickable: true,
			icon: img
		});

		$(window).resize(function(event) {
			map.setCenter(latlng, 15);
		});
	}
	
	var img = ($('#map').attr('data') === "small") ? "_/img/tdi-map-icon-small.png" : "_/img/tdi-map-icon.png";
	var nLng = ($('#map').attr('data') === "small") ? "-83.216801" : "-83.212001";
	var delayed = $('#map').attr('delay');
	if(delayed === "true") {
		setTimeout(callMap,1500);
	} else {
		callMap();
	}
	function callMap() {
		buildMap(img, nLng);
	}

});

// var GMAPs = (function() {
// 	var lat = 42.315718,	// default lat
// 		lng = -83.216801,	// default lng
// 		latlng = new google.maps.LatLng(lat, lng),
// 		options = {
// 			zoom: 15,
// 			center: latlng,
// 			scrollwheel: false,
// 			panControl: false,
// 			rotateControl: false,
// 			scaleControl: false,
// 			zoomControl: false,
// 			mapTypeControlOptions: {
// 				style: google.maps.MapTypeControlStyle.DEFAULT
// 			},
// 			mapTypeId: google.maps.MapTypeId.ROADMAP
// 		},
// 		map = new google.maps.Map(document.getElementById('map'), options),
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(lat, lng),
// 			map: map,
// 			title: 'Team Detroit',
// 			clickable: true,
// 			icon: 'img/tdi-map-icon.png'
// 		});	
// 
// 		$(window).resize(function(event) {
// 			map.setCenter(latlng, 15);
// 		});
// 
// })();
