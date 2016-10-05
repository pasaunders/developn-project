(function(module){
  var mapController = {};

  mapController.reveal = function() {
    $('#resultsPage').show();
    $('#filtersPage').hide();
  };
  module.mapController = mapController;
})(window);
