// (function(module) {
  var permits = {};

  permits.all = [];

  tryArray = [];

  permits.requestPermits = function() {
    $.get('https://data.seattle.gov' +
          '/resource/i5jq-ms7b.json')
    .done(function(data) {
      permits.all = data;
    });
  };

  permits.requestPermits();


//   module.permits;
// })(window);
