(function(module) {

  // this function constructs a get request
  // by appending a sql query from requestController.js
  // to our datas url (https://data.seattle.gov/) courtesy
  // of Socrata. The endpoint is 'resource/i5jq-ms7b.json'.
  // The get request is executed and data is inputted into
  // an array of objects. This array objects is given to
  // mapBuilder.populateMap in displayMap.js, executed in
  // the Page next(); call at the end of the function.

  permits = {};
  permits.all = [];
  permits.getUserRequestedData = function(ctx, next) {
    $.get('https://data.seattle.gov/' +
          'resource/i5jq-ms7b.json' +
          ctx.sql)
    .done(function(data) {
      permits.all = data;
      if (permits.all.length == 0){
        alert('Your search returns zero results. Please try another.');
      };
      next();
    });
  };
  module.permits;
})(window);
