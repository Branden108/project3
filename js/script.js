function initMap() {
  var markerLatLng = { lat: 42.1223, lng: -88.3732 };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: markerLatLng,
    zoom: 20
  });

  var marker = new google.maps.Marker({
    position: markerLatLng,
    map: map,
    title: 'Gilberts Grizzly',
	icon: 'images/gilbertsgrizzly.png'
  });
}
