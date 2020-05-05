import AWS from "aws-sdk";
import moment from 'moment';

export const state = () => ({
  newsList: [],
})

export const getters = {
  newsList: (state) => state.newsList,
}

export const mutations = {
  mutationGetNewsList(state, dataset) {
    state.newsList = dataset.Items
    // console.log(state.newsList)
  }
}

export const actions = {
  async actionGetNewsList({commit}) {

    //現在時刻
    var newDate = Number(moment(new Date()).format('YYYYMMDDHHmm'))

    //テーブル検索用パラメーター
    var params = {
      TableName: "News",
      ScanIndexForward: true,
      KeyConditionExpression: "#Category = :category and #Date <= :now",
      ExpressionAttributeNames:{
        "#Date": "DATE",
        "#Category": "CATEGORY"
      },
      ExpressionAttributeValues: {
        ":now": newDate,
        ":category": "NEWS"
      },
    };

    var dynamodb = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
      region: "ap-northeast-1"
    });

    await dynamodb.query(params,function (err, dataset) {
      if (err) console.log(err, err.stack); // an error occurred
      commit('mutationGetNewsList', dataset);
    }).promise();
  }
}


