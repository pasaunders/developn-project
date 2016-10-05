(function(module) {

  permits = {};
  permits.all = [];
  permits.getUserRequestedData = function(ctx, next) {
    $.get('https://data.seattle.gov/' +
          'resource/i5jq-ms7b.json' +
          ctx.sql)
    .done(function(data) {
      permits.all = data;
      next();
      console.log('successful');
    });
  };

  module.permits;
})(window);
