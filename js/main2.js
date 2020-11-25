let map = L.map('map').setView([41.3868561, 2.1661102], 13);
let marker = null;
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

map.on('click', function (e) {

    if (marker) map.removeLayer(marker)
    let center = e.latlng;

    marker = L.marker(center).bindPopup("Mis coordenadas son:<br><b>Lat: " + e.latlng.lat + " Lng:" + e.latlng.lng + "</b>").addTo(map);
  
    map.setView(center, 18);

})
