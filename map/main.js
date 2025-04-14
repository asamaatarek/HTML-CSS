var arr = [{id : 1, name: "" }, {},]

function getPosition (countryName){
  
// Create request

var request = new XMLHttpRequest();


// Define request


request.open("GET" , `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
// Send Request
 request.send();
 request.onload = function(){
    var data =  JSON.parse(request.response);

    console.log(data[0].lat , data[0].lon);
    
    
 }

}