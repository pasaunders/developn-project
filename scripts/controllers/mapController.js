(function(module){
  var mapController = {};

  mapController.reveal = function() {
    $('#resultsPage').show();
    $('#filtersPage').hide();
    google.maps.event.trigger(mapBuilder.map, 'resize');
  };
  module.mapController = mapController;
})(window);
