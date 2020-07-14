// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-northeast-1'});

// Create the DynamoDB service object
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

var params = {
  // TableName: 'test',
  // Item: {s: "testtest"}
  // ID: {S: '2'},
  TableName: 'IBUKI_OFFICIAL',
  Item: {
    "ID": {'S': '2'},
    "Date": {'S': '202004101000'},
    "title": {'S': 'HPが新しくなりました！'},
    "content": {'S': `IBUKIのHPが全面リニューアルしました。\nデザイン、コーディング、プログラミング、全てをIBUKI自身で手がけております。`},
    "link": {'S': '/'},
    "externalLink": {'S': ""},
  }
};


docClient.scan(params, (err, data) => {
  if (err) console.log(JSON.stringify(err, null, 2))
  else console.log(JSON.stringify(data, null, 2))
})
