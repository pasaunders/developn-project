(function(module) {
  var filterController = {};

  filterController.reveal = function() {
    $('#filtersPage').show();
    $('#resultsPage').hide();
    $('#instructionsPage').hide();
  };

  // the functions below manage select box states
  // that depend on the users input. conflicts in
  // user entry are avoided completely.

  // this function listens for changes in the date
  // select boxes using the select-year class

  $('.select-year').on('change', function() {
    if ($(this).attr('id') == 'dateUpperBound') {
      var $upperYear = $(this).val().slice(26,30);
      $('#dateLowerBound option[data-year]').each(function() {
        if (Math.round($(this).text()) >= $upperYear) {
          $(this).prop('disabled', true);
        };
      });
    } else {
      var $lowerYear = $(this).val().slice(26,30);
      $('#dateUpperBound option[data-year]').each(function() {
        if (Math.round($(this).text()) <= $lowerYear) {
          $(this).prop('disabled', true);
        };
      });
    };
  });

  // this function listens for changes in the value
  // select boxes using the select-value class

  $('.select-value').on('change', function() {
    if ($(this).attr('id') == 'valueUpperBound') {
      var $upperValue = parseInt($(this).val().slice(15,-3));
      $('#valueLowerBound option[data-value]').each(function() {
        var lowerTestValue = parseInt($(this).val().slice(15,-3));
        if (lowerTestValue >= $upperValue) {
          $(this).prop('disabled', true);
        };
      });
    } else {
      var $lowerValue = parseInt($(this).val().slice(15,-3));
      $('#valueUpperBound option[data-value]').each(function() {
        var upperTestValue = parseInt($(this).val().slice(15,-3));
        if (upperTestValue <= $lowerValue) {
          $(this).prop('disabled', true);
        };
      });
    };
  });

  module.filterController = filterController;
})(window);
