import Vue from 'vue';

import AWS from 'aws-sdk';
// import AWS object without services
// import AWS from 'aws-sdk/global';
// import individual service
// import dynamodb from 'aws-sdk/clients/dynamodb';

Vue.use(AWS);

var accessKey = process.env.AWS_ACCESS_KEY;
var secretKey = process.env.AWS_SECRET_KEY;

AWS.config.update({
  region: 'ap-northeast-1',
  credentials: new AWS.Credentials(accessKey, secretKey)
});



// var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

//
// var params = {
//   // ExpressionAttributeNames: {
//   //   "#AT": "AlbumTitle",
//   //   "#ST": "SongTitle"
//   // },
//   // ExpressionAttributeValues: {
//   //   ":a": {
//   //     S: "No One You Know"
//   //   }
//   // },
//   // FilterExpression: "Artist = :a",
//   // ProjectionExpression: "#ST, #AT",
//   TableName: "News"
// };
//
// var getDynamo(params) {
//   dynamodb.scan(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data);           // successful response
//   });
// };

