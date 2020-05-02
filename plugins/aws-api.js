import Vue from 'vue'

import AWS from 'aws-sdk';
// import AWS object without services
// import AWS from 'aws-sdk/global';
// import individual service
import S3 from 'aws-sdk/clients/s3';

Vue.use(AWS, )

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  // ExpressionAttributeNames: {
  //   "#AT": "AlbumTitle",
  //   "#ST": "SongTitle"
  // },
  // ExpressionAttributeValues: {
  //   ":a": {
  //     S: "No One You Know"
  //   }
  // },
  // FilterExpression: "Artist = :a",
  // ProjectionExpression: "#ST, #AT",
  TableName: "News"
};

dynamodb.scan(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);           // successful response
}

