function initMap()
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.12249177774223, lng: -88.37281467861098},
	zoom: 18,
	mapId: 'f790a552a5b4967a'
  })
  
  ;new google.maps.Marker({
    position: { lat: 42.12249177774223, lng: -88.37281467861098 },
    map,
    title: "Gilberts Elementary School",
	icon: 'images/gilbertsgrizzly.png'
  });