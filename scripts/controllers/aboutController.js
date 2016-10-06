(function(module){
  var aboutController = {};

  aboutController.reveal = function() {
    $('#instructionsPage').show();
    $('#resultsPage').hide();
    $('#filtersPage').hide();
  };
  module.aboutController = mapController;
})(window);
