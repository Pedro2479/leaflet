let map = L.map('map').setView([41.3868561, 2.1661102], 13);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
 
}).addTo(map);

map.on('click', function(ev) {
  
    let marker =L.marker([ev.latlng.lat,ev.latlng.lng])
    .bindPopup(`" latitud :"+" "+"longitud :"`)
    .addTo(map);

   

})