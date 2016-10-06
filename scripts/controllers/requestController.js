(function(module) {

  // requestController is an object that contains
  // functions for generating a sql query based
  // on user input. a sql query string is generated
  // from values in the radio button forms and select
  // option tags in index.html. these are sent to
  // permitModel.js where an ajax call gets our
  // data.

  requestController = {};

  // these vars are pieces used to build a sql query.
  // sqlSelect is a defined select phrase in sql.
  // sqlTail is a default tail to go on the end of
  // the sql query. sqlAND stores a value to be placed
  // between sql conditions in the sql query. sqlTail
  // currently specifies a lower bound for date.

  var sqlSelect = '?$select=*&$where=';
  var sqlTail = 'application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
  var sqlAND = '%20AND%20';

  // This function returns a string of sql that
  // contains the conditions for the sql query to be
  // sent to permitModel.js. The conditinos are appended
  // to each other connected by var sqlAND to form
  // valid sql. in the case that a lower bound is specified
  // for date, the default sqlTail is replaced by the new
  // date lower bound.

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
      sqlConditions = sqlConditions + $('#dateUpperBound').val() + sqlAND;
    }
    if(($('#dateLowerBound').val())!=='') {
      sqlTail = $('#dateLowerBound').val();
    }
    if(($('#valueUpperBound')).val()!=='') {
      sqlConditions = sqlConditions + $('#valueUpperBound').val() + sqlAND;
    }
    if(($('#valueLowerBound')).val()!=='') {
      sqlConditions = sqlConditions + $('#valueLowerBound').val() + sqlAND;
    }
    return sqlConditions;
  };

  // This function generates an sql query by returning
  // a string that is the combination of a select string
  // (sqlSelect), a conditions string (sqlConditions())
  // and an sql tail (sqlTail).

  sqlQuery = function() {
    var sqlString = sqlSelect +
    sqlConditions() +
    sqlTail;
    return sqlString;
  };

 // The query is generated and is given to
 // permits.getRequestedUserData() in
 // permitModel.js. permits.getRequestedUserData() is
 // called in the Page next(); function at the end of the
 // function below, requestController.controlRequest.

  requestController.controlRequest = function(ctx, next) {
    ctx.sql = sqlQuery();
    next();
  };

  module.requestController;
})(window);
