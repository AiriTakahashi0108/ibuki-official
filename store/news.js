import AWS from "aws-sdk";

export const state = () => ({
  newsList: [],
})

export const getters = {
  newsList: (state) => state.newsList,
}

export const mutations = {
  mutationGetNewsList(state, dataset) {
    state.newsList = dataset.Items
    console.log(state.newsList)
  }
}

export const actions = {
  async actionGetNewsList({commit}) {
    var params = {
      TableName: "News",
      ScanIndexForward: true,
      KeyConditionExpression: "#Category = :category and #Date <= :now",
      ExpressionAttributeNames:{
        "#Date": "DATE",
        "#Category": "CATEGORY"
      },
      ExpressionAttributeValues: {
        ":now": 202005051000,
        ":category": "NEWS"
      },
      // ConditionExpression: "#yr LE :yyyy"
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


