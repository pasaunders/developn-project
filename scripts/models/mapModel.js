(function(module) {

  var stylesArray = [
    {
      featureType: "all",
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
    zoom: 15,
    styles: stylesArray,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  var map = new google.maps.Map(document.getElementById('mapBox'), mapOptions);
  $('#mapBox>div').attr('style', 'height: 100%; width: 100%; position: static; background-color: rgb(229, 227, 223);')

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  var marker = new google.maps.Marker({
    position: {lat: 47.618217, lng: -122.351832},
    map: map
  });
  module.map = map;
})(window);




// (function(module){
//   var locations = {};
//   locations.allLocations = [];
//
//   locations.makeMap = function(){  //initalizes map.
//     var map =  new google.maps.Map(document.getElementById('mapBox'),{
//       center: {lat: 47.6062, lng: 122.3321 },
//       zoom: 10 //consider setting this based on user's chosen distance scale. 10 is city-wide.
//     });
//   };
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
//   }; locations.allLocations.forEach(function(latLng) { //iterates through all the filtered locations and posts markers.
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
