function initMap() {

    var markerLatLng = { lat: 42.12239031682727, lng: -88.37322237413316 };


    var map = new google.maps.Map(document.getElementById('map'), {
        center: markerLatLng,
        zoom: 15
    });


    var marker = new google.maps.Marker({
        position: markerLatLng,
        map: map,
        title: 'Marker Title'
    });
}
