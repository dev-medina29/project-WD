const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
current_year = document.querySelector("#currentyear");
current_year.innerHTML = `${year}`;
current_date = document.querySelector("#lastModified");
current_date.innerHTML = `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
coordinate = {
  lat: -4.271667229260911,
  lng: 15.260030653062937,
};
function myMap() {
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 15,
    center: coordinate,
  });
  new google.maps.Marker({
    position: coordinate,
    map: map,
    title: "Zoolandia Park",
  });
}
