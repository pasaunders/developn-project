// (function(module) {

  // TODO: wrap this in module.

  // permits object to contain permits array,
  // get request to populate array,
  //
  var permits = {};

  // permits.all will contain permit data from endpoint
  // https://data.seattle.gov/resource/i5jq-ms7b.
  // get request to populate permits.all with
  // permits data

  permits.all = [];

  // get requst to populate permits.all with
  // permits data. endpoint https://data.seattle.gov/resource/i5jq-ms7b.

  permits.requestPermits = function() {
    $.get('https://data.seattle.gov' +
          '/resource/i5jq-ms7b.json')
    .done(function(data) {
      permits.all = data;
    });
  };

  // temporary invocation.

  permits.requestPermits();


//   module.permits;
// })(window);
