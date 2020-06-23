module.exports = [
  {
    '$group': {
      '_id': {
        '$dayOfYear': '$headers.Date'
      }, 
      'emailsPerDay': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'avg': {
        '$avg': '$emailsPerDay'
      }, 
      'min': {
        '$min': '$emailsPerDay'
      }, 
      'max': {
        '$max': '$emailsPerDay'
      }
    }
  }
];
