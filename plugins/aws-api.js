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

