requestController = {};

var sqlString = '';
var sqlSelect = '?$select=address,permit_type,status,application_date,value,category,description,applicant_name,latitude,longitude,location&$where=';
var sqlConditions = '';
var sqlTail = 'application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
var sqlAND = '%20AND%20';

// var permit_type = $('input[name=permitType]:checked').val();
// var category = $('input[name=categoryType]:checked').val();
// var permit_status = $('input[name=permitStatus]:checked').val();
// var valueHigh = '';
// var valueLow = '';
// var recentDate = '';
// var longAgoDate = '';

var numberOfFilters = 3;

// var filters = [];
// var userRequests = [];
// populateFilters = function() {};
// populateUserRequests = function() {};
//
// checkFilters = function() {
//   if ($('input:checked').val() !== undefined) {
//     userRequests.push(($('input:checked').val()));
//   };
// };

generateSQLConditions = function() {
  sqlConditions = '';
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
};

generateSQLQuery = function() {
  generateSQLConditions();
  sqlString = sqlSelect +
  sqlConditions +
  sqlTail;
};

requestController.controlRequest = function(callback) {
  generateSQLQuery();
  permits.getUserRequestedData(sqlString, function(data) {
    callback();
  });
  // next();
};
