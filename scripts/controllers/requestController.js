(function(module) {

  requestController = {};

  var sqlSelect = '?$select=*&$where=';
  var sqlTail = 'application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
  var sqlAND = '%20AND%20';

  sqlConditions = function() {
    var sqlConditions = '';
    if ($('input[name=permitType]:checked').length) {
      sqlConditions = sqlConditions + $('input[name=permitType]:checked').val() +
      sqlAND;
    }
    if ($('input[name=categoryType]:checked').length) {
      sqlConditions = sqlConditions + $('input[name=categoryType]:checked').val() +
      sqlAND;
    }
    if ($('input[name=permitStatus]:checked').length) {
      sqlConditions = sqlConditions + $('input[name=permitStatus]:checked').val() +
      sqlAND;
    }
    if(($('#dateUpperBound')).val()!=='') {
      console.log('sqlTail: ' + sqlTail);
      console.log('sqlConditions: ' + sqlConditions);
      sqlConditions = sqlConditions + $('#dateUpperBound').val() + sqlAND;
      console.log('sqlTail: ' + sqlTail);
      console.log('sqlConditions: ' + sqlConditions);
    }
    if(($('#dateLowerBound').val())!=='') {
      console.log('sqlTail: ' + sqlTail);
      console.log('sqlConditions: ' + sqlConditions);
      sqlTail = $('#dateLowerBound').val();
      console.log('sqlTail: ' + sqlTail);
      console.log('sqlConditions: ' + sqlConditions);
    }
    if(($('#valueUpperBound')).val()!=='') {
      sqlConditions = sqlConditions + $('#valueUpperBound').val() + sqlAND;
    }
    if(($('#valueLowerBound')).val()!=='') {
      sqlConditions = sqlConditions + $('#valueLowerBound').val() + sqlAND;
    }
    console.log('sqlConditions: ' + sqlConditions);
    return sqlConditions;
  };

  sqlQuery = function() {
    var sqlString = sqlSelect +
    sqlConditions() +
    sqlTail;
    console.log('sqlTail: ' + sqlTail);
    console.log('sqlString: ' + sqlString);
    return sqlString;
  };

  requestController.controlRequest = function(ctx, next) {
    ctx.sql = sqlQuery();
    next();
  };

  module.requestController;
})(window);
