requestController = {};

var sqlString = '';
var sqlSelect = '?$select=address,permit_type,status,application_date,value,category,description,applicant_name,latitude,longitude,location&$where=';
var sqlConditions = '';
var sqlTail = 'application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
var sqlAND = '%20AND%20';

var permit_type = $('input[name=permitType]:checked').val();
var category = $('input[name=categoryType]:checked').val();
var permit_status = $('input[name=permitStatus]:checked').val();
var valueHigh = '';
var valueLow = '';
var recentDate = '';
var longAgoDate = '';

var numberOfFilters = 3;

var filters = [];
var userRequests = [];
populateFilters = function() {};
populateUserRequests = function() {};

checkFilters = function() {
  if ($('input:checked').val() !== undefined) {
    userRequests.push(($('input:checked').val()));
  };
};

generateSQLConditions = function() {
  sqlConditions = '';
  // sqlConditions = sqlConditions + $('input[name=permitType]:checked').val() + sqlAND;
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
  // for (i = 0;i < userRequests.length;i++) {
  //   if (i === userRequests.length - 1) {
  //     sqlConditions = sqlConditions + $('input:checked').val() + '%20AND%20';
  //   } else {
  //     sqlConditions = sqlConditions + $('input:checked').val();
  //   };
  // };
};

generateSQLQuery = function() {
  generateSQLConditions();
  sqlString = sqlSelect +
  sqlConditions +
  sqlTail;
};

requestController.controlRequest = function(ctx, next) {
  generateSQLQuery();
  permits.getUserRequestedData(sqlString);
  next();
};

// requestController.controlRequest();

'permit_type%20=%20%27Construction%27';
'permit_type%20=%20%27Site%20Development%27';
'permit_type%20=%20%27Demolition%27';

'category%20=%20%27COMMERCIAL%27';
'category%20=%20%27INDUSTRIAL%27';
'category%20=%20%27INSTITUTIONAL%27';
'category%20=%20%27MULTIFAMILY%27';
'category%20=%20%27SINGLE%20FAMILY%20%2f%20DUPLEX%27';

'status%20=%20%27Permit%20Issued%27';
'status%20=%20%27Reviews%20Completed%27';
'status%20=%20%27AP%20Closed%27';
'status%20=%20%27Application%20Accepted%27';

'?$select=address,permit_type,status,application_date,value,category,description,applicant_name,latitude,longitude,location&$where=permit_type%20=%20%27Construction%27%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';

'?$select=address,permit_type,application_date,value,category,description,applicant_name,location&$where=permit_type%20=%20%27Construction%27%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
