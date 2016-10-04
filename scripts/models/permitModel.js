// (function(module) {

  // TODO: wrap this in module.

  // // permits object to contain permits array,
  // // get request to populate array,
  // //
  //
  //
  //
  // function permits (opts) {
  //   Object.keys(opts).forEach(function(e, index, keys) {
  //     this[e] = opts[e];
  //   }, this);
  // };
  //
  // // permits.all will contain permit data from endpoint
  // // https://data.seattle.gov/resource/i5jq-ms7b.
  // // get request to populate permits.all with
  // // permits data
  //
  // // permits.all = [];
  //
  // // get requst to populate permits.all with
  // // permits data. endpoint https://data.seattle.gov/resource/i5jq-ms7b.
  //
  // // permits.createTable
  // // permits = {};
  //
  // permits.createTable = function(callback) {
  //   webDB.execute(
  //     'CREATE TABLE IF NOT EXISTS permits (' +
  //       'id INTEGER PRIMARY KEY, ' +
  //       'Application_Permit_Number VARCHAR(255) NOT NULL, ' +
  //       'Permit_Type VARCHAR(255) NOT NULL, ' +
  //       'Address VARCHAR(255) NOT NULL, ' +
  //       'Description VARCHAR, ' +
  //       'Category VARCHAR(255), ' +
  //       'Action_Type VARCHAR(255), ' +
  //       'Work_Type VARCHAR(255), ' +
  //       'Value VARCHAR(255), ' +
  //       'Applicant_Name VARCHAR(255), ' +
  //       'Application_Date DATETIME, ' +
  //       'Issue_Date DATETIME, ' +
  //       'Final_Date DATETIME, ' +
  //       'Expiration_Date DATETIME, ' +
  //       'Status VARCHAR(255), ' +
  //       'Contractor VARCHAR(255), ' +
  //       'Permit_and_Complaint_Status_URL VARCHAR(255), ' +
  //       'Master_Use_Permit VARCHAR(255), ' +
  //       'Latitude VARCHAR(255), ' +
  //       'Longitude VARCHAR(255), ' +
  //       'Location VARCHAR(255));',
  //     callback
  //   );
  // };
  //
  // permits.createTable();
  //
  // permits.prototype.insertRecord = function(callback) {
  //   webDB.execute(
  //     [{
  //       'sql': 'INSERT INTO permits ' +
  //       '(Application_Permit_Number, Permit_Type, Address, Description, Category, Action_Type, Work_Type, Value, Applicant_Name, Application_Date, Issue_Date, Final_Date, Expiration_Date, Status, Contractor, Permit_and_Complaint_Status_URL, Master_Use_Permit, Latitude, Longitude, Location) ' +
  //       'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
  //       'data':
  //         [this.application_permit_number,
  //         this.permit_type,
  //         this.address,
  //         this.description,
  //         this.category,
  //         this.action_type,
  //         this.work_type,
  //         this.value,
  //         this.applicant_name,
  //         this.application_date,
  //         this.issue_date,
  //         this.final_date,
  //         this.expiration_date,
  //         this.status,
  //         this.contractor,
  //         this.permit_and_complaint_status_url,
  //         this.master_use_permit,
  //         this.latitude,
  //         this.longitude,
  //         this.location],
  //     }],
  //     callback
  //   );
  // };
  //
  // permits.fetchAll = function() {
  //   $.get('https://data.seattle.gov' +
  //         '/resource/i5jq-ms7b.json')
  //   .done(function(data) {
  //     data.forEach(function(item) {
  //       var permit = new permits(item);
  //       permit.insertRecord();
  //     });
  //   });
  // };

  permits = {};

  permits.all = [];

  sqlString = '?$select=address,permit_type,application_date&$where=permit_type%20=%20%27Construction%27%20AND%20application_date%20>%20%272011-01-01T00:00:00%27&$order=application_date DESC';

  permits.getUserRequestedData = function(sql) {
    $.get('https://data.seattle.gov/' +
          'resource/i5jq-ms7b.json' +
          sql)
    .done(function(data) {
      permits.all = data;
    });
  };

  permits.getUserRequestedData(sqlString);

  //
  // // permits.requestPermits = function() {
  // //   $.get('https://data.seattle.gov' +
  // //         '/resource/i5jq-ms7b.json')
  // //   .done(function(data) {
  // //     permits.all = data;
  // //   });
  // // };
  //
  //
  //
  // // temporary invocation.
  //
  // // permits.requestPermits();
  //
  //
  //
  // permits.fetchAll();

//   module.permits;
// })(window);
