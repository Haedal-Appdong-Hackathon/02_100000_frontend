let map;
function myMap() {
    let mapOptions = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}