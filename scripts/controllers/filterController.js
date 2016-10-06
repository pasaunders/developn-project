(function(module) {
  var filterController = {};

  filterController.reveal = function() {
    $('#filtersPage').show();
    $('#resultsPage').hide();
  };

  // var dateUpperBoundTracker = 0;
  // var dateLowerBoundTracker = 0;
  // var valueUpperBoundTracker = 0;
  // var valueLowerBoundTracker = 0;

  // $('#dateUpperBound').on('change', function() {
  //   switch ($('#dateUpperBound').val()) {
  //   case '':
  //     dateUpperBoundTracker = 100;
  //     break;
  //   case 'application_date%20<%20%272016-01-01T00:00:00%27':
  //     dateUpperBoundTracker = 10;
  //     break;
  //   case 'application_date%20<%20%272015-01-01T00:00:00%27':
  //     dateUpperBoundTracker = 9;
  //     break;
  //   case 'application_date%20<%20%272014-01-01T00:00:00%27':
  //     dateUpperBoundTracker = 8;
  //     break;
  //   case 'application_date%20<%20%272013-01-01T00:00:00%27':
  //     dateUpperBoundTracker = 7;
  //     break;
  //   case 'application_date%20<%20%272012-01-01T00:00:00%27':
  //     dateUpperBoundTracker = 6;
  //     break;
  //   };
  //   alert('dateupperbound: ' + dateUpperBoundTracker);
  // });
  //
  // $('#dateLowerBound').on('change', function() {
  //   switch ($('#dateLowerBound').val()) {
  //   case '':
  //     dateLowerBoundTracker = 0;
  //     break;
  //   case 'application_date%20>%20%272016-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 10;
  //     break;
  //   case 'application_date%20>%20%272015-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 9;
  //     break;
  //   case 'application_date%20>%20%272014-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 8;
  //     break;
  //   case 'application_date%20>%20%272013-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 7;
  //     break;
  //   case 'application_date%20>%20%272012-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 6;
  //     break;
  //   case 'application_date%20>%20%272011-01-01T00:00:00%27':
  //     dateLowerBoundTracker = 5;
  //     break;
  //   };
  //   alert('datelowerbound: ' + dateLowerBoundTracker);
  // });
  //
  // if (dateUpperBoundTracker < dateLowerBoundTracker) {
  //   alert('Date upper bound lower than date lower bound');
  // };

  // if ($('#dateUpperBound').val() == 'application_date%20<%20%272012-01-01T00:00:00%27') {
  //   $('#dateLowerBound option[value=application_date%20>%20%272011-01-01T00:00:00%27]').prop('disabled',true);
  // };

  $('.select-year').on('change', function() {
    if ($(this).attr('id') == 'dateUpperBound') {
      var $upperYear = $(this).val().slice(26,30);
      console.log($upperYear);
      $('#dateLowerBound option[data-year]').each(function() {
        if (Math.round($(this).text()) > $upperYear) {
          console.log(Math.round($(this).text()));
          console.log($(this));
          console.log(Math.round($(this)));
          $(this).prop('disabled', true);
        };
      });
    } else {
      var $lowerYear = $(this).val().slice(26,30);
      console.log($lowerYear);
      $('#dateUpperBound option[data-year]').each(function() {
        if (Math.round($(this).text()) < $lowerYear) {
          console.log(Math.round($(this).text()));
          console.log($(this));
          console.log(Math.round($(this)));
          $(this).prop('disabled', true);
        };
      });
    };
  });

  $('.select-year').on('change', function() {
    if ($(this).attr('id') == 'dateUpperBound') {
      var $upperYear = $(this).val().slice(26,30);
      console.log($upperYear);
      $('#dateLowerBound option[data-year]').each(function() {
        if (Math.round($(this).text()) > $upperYear) {
          console.log(Math.round($(this).text()));
          console.log($(this));
          console.log(Math.round($(this)));
          $(this).prop('disabled', true);
        };
      });
    } else {
      var $lowerYear = $(this).val().slice(26,30);
      console.log($lowerYear);
      $('#dateUpperBound option[data-year]').each(function() {
        if (Math.round($(this).text()) < $lowerYear) {
          console.log(Math.round($(this).text()));
          console.log($(this));
          console.log(Math.round($(this)));
          $(this).prop('disabled', true);
        };
      });
    };
  });

  module.filterController = filterController;
})(window);
