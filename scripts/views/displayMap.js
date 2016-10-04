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
    zoom: 12,
    styles: stylesArray,
    center: new google.maps.LatLng(47.618217, -122.351832),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };

  var map = new google.maps.Map(document.getElementById('mapBox'), mapOptions);
  google.maps.event.addListener(map, 'idle', function() {
    $('#mapBox>div').attr('style', 'height: 100%; width: 100%; position: static; background-color: rgb(229, 227, 223);');
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);var address = '4455 Interlake AVE N Seattle WA 98103'; //value needs to be set based on the address form field.
geocoder.geocode({'address': address},{
  componentRestrictions: {locality: 'Seattle'}
}, function(results, status){
  if (status === 'OK') {
    map.setCenter(results[0].geometry.location);
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});
  });

  function populateMap() {
    permits.all.forEach(function(row, idx, array) {
      // var myLatLng = new google.maps.LatLng(Number(this.latitude,Number(this.longitude)));
      var marker = new google.maps.Marker({
        position: {lat: Number(row.latitude), lng: Number(row.longitude)},
        map: map,
      });
    });
  }
  populateMap();  //there is probably a better way to populate the markers

  function setCenter() {
    var geocoder = new google.maps.Geocoder();
    var address = 'value'; //value needs to be set based on the address form field.
    geocoder.geocode({'address': address},
    // {componentRestrictions: {country: 'US'}}, non-functional, we want to restrict to the seattle locality
    function(results, status){
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  module.map = map;
})(window);
