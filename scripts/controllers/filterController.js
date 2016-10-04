var sqlString = '';
var TEMPsqlString = '';

var radioButtonRequest = 'Site Development';


var permit_type = '';
var category = '';
var value = '';
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

generateSQL = function() {
  TEMPsqlString = '?$select=address,permit_type,application_date,value,category,description,applicant_name,location&$where=' +
  permit_type +
  '%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';
};

TEMPstring = 'permit_type%20=%20%27Construction%27' +
'%20AND%20' +
'application_date%20>%20%272011-01-01T00:00:00%27' +
'&$order=application_date DESC';

sqlString = '?$select=address,permit_type,application_date,value,category,description,applicant_name,location&$where=permit_type%20=%20%27Construction%27%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';

generateSQL();
permits.getUserRequestedData(TEMPsqlString);
