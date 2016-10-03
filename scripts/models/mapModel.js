//(function(module){
  var locations = {};
  locations.allLocations = [];

  function initMap (){  //initalizes map.
    var map =  new google.maps.Map(document.getElementById('mapBox'),{
      center: {lat: 47.6062, lng: 122.3321 },
      zoom: 10
    });
  };

  var marker = new google.maps.Marker({
    position: {/* insert position data from selected locations */},
    map: map
  });

// })(window);
