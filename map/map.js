navigator.geolocation.getCurrentPosition(success, error)

var lon , lat ;

function success(pos){
 lat =  pos.coords.latitude ;
 lon =  pos.coords.longitude;

 initMap(lat , lon);
  
}

function error(e){alert(e.message)}


function initMap(myLat , myLon) {
  const myLatLng = { lat: myLat, lng: myLon };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;