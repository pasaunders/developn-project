(function(module) {
  var filterController = {};

  filterController.reveal = function() {
    $('#filtersPage').show();
    $('#resultsPage').hide();
  };
  module.filterController = filterController;
})(window);
