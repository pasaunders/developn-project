(function(module) {

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
