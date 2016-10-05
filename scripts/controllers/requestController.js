(function(module) {

  requestController = {};

  var numberOfFilters = 3;
  var sqlSelect = '?$select=address,permit_type,status,application_date,value,category,description,applicant_name,latitude,longitude,location&$where=';
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
    return sqlConditions;
  };
  
  sqlQuery = function() {
    var sqlString = sqlSelect +
    sqlConditions() +
    sqlTail;
    return sqlString;
  };

  requestController.controlRequest = function(ctx, next) {
    ctx.sql = sqlQuery();
    next();
  };

  module.requestController;
})(window);
