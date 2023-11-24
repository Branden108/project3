let map;

async function initMap() {

  const position = { lat: 42.12240285010284, lng: -88.37323223969531 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "Gilberts_Elementary_School",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "GilbertsElementarySchool",
  });
}

initMap();