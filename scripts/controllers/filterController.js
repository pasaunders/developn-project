(function(module) {
  var filterController = {};

  filterController.reveal = function() {
    $('#filtersPage').show();
    $('#resultsPage').hide();
    $('#instructionsPage').hide();
  };

  $('.select-year').on('change', function() {
    $('#dateUpperBound option[data-year]').each(function() {
      $(this).prop('disabled', false);
    });
    $('#dateLowerBound option[data-year]').each(function() {
      $(this).prop('disabled', false);
    });
    if ($(this).attr('id') === 'dateUpperBound') {
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

  $('.select-value').on('change', function() {
    $('#valueUpperBound option[data-value]').each(function() {
      $(this).prop('disabled', false);
    });
    $('#valueLowerBound option[data-value]').each(function() {
      $(this).prop('disabled', false);
    });
    if ($(this).attr('id') === 'valueUpperBound') {
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
