










// (function(module){
//   var locations = {};
//   locations.allLocations = [];
//
//   function initMap (){  //initalizes map.
//     var map =  new google.maps.Map(document.getElementById('mapBox'),{
//       center: {lat: 47.6062, lng: 122.3321 },
//       zoom: 10 //consider setting this based on user's chosen distance scale. 10 is city-wide.
//     });
//   };
//
//   locations.allLocations.forEach(function(latLng) { //iterates through all the filtered locations and posts markers.
//     var marker = new google.maps.Marker({
//       position: latLng, //sets the position of the marker as the latLng value passed into the callback. May need checking for syntax.
//       map: map
//     });
//     marker.setMap(map); //adds the defined marker for the map.
//   });
//
//   function updateMapCenter(){ //moves the center of the map to the users's entered address.
//     // var address = /*value of address gathered from user*/; throws an error until assigned a value.
//     geocoder.geocode( {'address': address/* user's address goes here */}, function(results, status){ //this code block centers the map on the user's entered address. Should be put into another function.
//       if (status === 'OK') {
//         map.setCenter(results[0].geometry.location);
//       }
//       else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   };
//   module.locations = locations;
// })(window);
