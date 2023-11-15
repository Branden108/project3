function initMap() {
  var map = new google.maps.Map(document.getElementById('mapcanvas'), {
    center: { lat: 42.12259292602539, lng: -88.37287139892578 },
    zoom: 14,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ],
  });

  var customMarker = new google.maps.Marker({
    position: { lat: 42.12259292602539, lng: -88.37287139892578 },
    map: map,
    title: 'Gilberts Grizzly',
    icon: 'images/gilbertsgrizzly.png',
  });

  var polygon = new google.maps.Polygon({
    paths: [
      { lat: 42.122, lng: -88.373 },
      { lat: 42.123, lng: -88.373 },
      { lat: 42.123, lng: -88.372 },
    ],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });

  polygon.setMap(map);

  var customMapType = new google.maps.StyledMapType(
    [
      {
        featureType: 'water',
        stylers: [{ color: '#87CEEB' }],
      },
      {
        featureType: 'landscape',
        stylers: [{ color: '#F5F5F5' }],
      },
    ],
    { name: 'Custom Style' }
  );

  map.mapTypes.set('custom_style', customMapType);
  map.setMapTypeId('custom_style');
}
