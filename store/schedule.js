import AWS from "aws-sdk";
import moment from 'moment';

//現在時刻
var newDate = Number(new moment(new Date()).format('YYYYMMDDHHmm'))

export const state = () => ({
  live: [],
  media: []
})

export const getters = {
  live: (state) => state.live,
  media: (state) => state.media,
  other: (state) => state.other,
}

export const mutations = {
  mutationGetLive(state, dataset) {
    state.live = dataset.Items
  },
  mutationGetMedia(state, dataset) {
    state.media = dataset.Items
  },
  mutationGetOther(state, dataset) {
    state.other = dataset.Items
  }
}

export const actions = {
  async actionGetLive({commit}) {

    //テーブル検索用パラメーター
    var params = {
      TableName: "Schedule",
      ScanIndexForward: true,
      // KeyConditionExpression: "#Category = :category and #Date <= :now",
      KeyConditionExpression: "#Category = :category",
      ExpressionAttributeNames: {
        // "#Date": "DATE",
        "#Category": "CATEGORY"
      },
      ExpressionAttributeValues: {
        // ":now": newDate,
        ":category": "LIVE",
      },
    };

    var dynamodb = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
      region: "ap-northeast-1"
    });

    await dynamodb.query(params, function (err, dataset) {
      if (err) console.log(err, err.stack); // an error occurred
      commit('mutationGetLive', dataset);
    }).promise();
  },
  async actionGetMedia({commit}) {

    //テーブル検索用パラメーター
    var params = {
      TableName: "Schedule",
      ScanIndexForward: true,
      KeyConditionExpression: "#Date <= :now",
      // KeyConditionExpression: "#Category = :category",
      ExpressionAttributeNames: {
        "#Date": "RELEASE_DATE",
        // "#Category": "CATEGORY"
      },
      ExpressionAttributeValues: {
        ":now": newDate,
        // ":category": "MEDIA",
      },
    };

    var dynamodb = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
      region: "ap-northeast-1"
    });

    await dynamodb.query(params, function (err, dataset) {
      if (err) console.log(err, err.stack); // an error occurred
      commit('mutationGetMedia', dataset);
    }).promise();
  }
}
