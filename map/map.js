function getPosition(countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
  request.send();

  request.onload = function () {
      const data = JSON.parse(request.response);
      
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      console.log("Coordinates:", lat, lon);
      showMap(lat, lon);
  };
}

function showMap(lat, lon) {
  const mapOptions = {
    center: { lat: lat, lng: lon },
    zoom: 4,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  new google.maps.Marker({
    position: { lat: lat, lng: lon },
    map: map,
    title: "Selected Country",
  });
}

window.initMap = function () {
  const select = document.getElementById("country-select");
  select.addEventListener("change", function () {
    getPosition(this.value);
  });
  getPosition("Egypt");
};