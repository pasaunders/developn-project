requestController = {};

TEMPstring = 'permit_type%20=%20%27Construction%27' +
'%20AND%20' +
'application_date%20>%20%272011-01-01T00:00:00%27' +
'&$order=application_date DESC';

sqlString = '?$select=address,permit_type,application_date,value,category,description,applicant_name,location&$where=permit_type%20=%20%27Construction%27%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';

var sqlString = '';
var TEMPsqlString = '';
var sqlConditions = '';

var radioButtonRequest = 'Site Development';

var permit_type = '';
var category = '';
var valueHigh = '';
var valueLow = '';
var recentDate = '';
var longAgoDate = '';

switch (radioButtonRequest) {
case 'Construction':
  permit_type = 'permit_type%20=%20%27Construction%27';
  break;
case 'Site Development':
  permit_type = 'permit_type%20=%20%27Site%20Development%27';
  break;
case 'Demolition':
  permit_type = 'permit_type%20=%20%27Demolition%27';
  break;
};

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
  for (i = 0;i < userRequests.length;i++) {
    if (i === userRequests.length - 1) {
      sqlConditions = sqlConditions + $('input:checked').val() + '%20AND%20';
    } else {
      sqlConditions = sqlConditions + $('input:checked').val();
    };
  };
};

generateSQLQuery = function() {
  TEMPsqlString = '?$select=address,permit_type,application_date,value,category,description,applicant_name,latitude,longitude,location&$where=' +
  permit_type +
  '%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
};

requestController.controlRequest = function() {
  generateSQLQuery();
  permits.getUserRequestedData(TEMPsqlString);
};

requestController.controlRequest();
