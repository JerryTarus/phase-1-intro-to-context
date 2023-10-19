// Your code here

// Creating a function
function createEmployeeRecord(employeeInfo) {
    let employeeRecord = {};
    employeeRecord.firstName = employeeInfo[0];
    employeeRecord.familyName = employeeInfo[1];
    employeeRecord.title = employeeInfo[2];
    employeeRecord.payPerHour = employeeInfo[3];
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];
    return employeeRecord;
  }


  
//   Another function
function createEmployeeRecords(rows) {
    return rows.map(row => createEmployeeRecord(row));
  }

  function createEmployeeRecord(row) {
    return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }




