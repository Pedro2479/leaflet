let map = L.map('map').setView([41.3868561, 2.1661102], 13);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(map);

let marker =L.marker([41.3868561, 2.1661102])
.bindPopup("<strong>Restaurant cent focs </strong></br>"+
"Restaurante mediterraneo <br>"+"carrer balmes 16 <br>"+
"08007 Barcelona").addTo(map);

