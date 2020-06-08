// const ORIGINAL = {
//   recommend: [
//     {
//       id: 1,
//       title: 'Rise!',
//       record: 'IBUKI 1st Single「Rise!」',
//       movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
//       description: `90年代を思わせるシンセサイザーや楽曲イメージに、2バスとシンセバスを重ね、斬新なアレンジ。`,
//       purchase: {
//         amazon: 'http://',
//         towerRecord: 'http://',
//         discUnion: 'http://',
//         spotify: 'http://',
//       },
//     },
//     {
//       id: 2,
//       title: 'DESIRE -情熱-!',
//       record: 'NATSUMETAL 1st Album「NATSUMETAL」',
//       movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
//       description: `IBUKI率いる、懐メロをメタルアレンジするバンドNATSUMETAL収録作品`,
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     }
//   ],
//   other: [
//     {
//       id: 1,
//       title: 'IBUKI 1st Single「Rise!/We are No.1」',
//       JN: 'IBKI-0001',
//       price: '1500',
//       movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
//       image:'~assets/image/jacket-sample.jpg',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     },
//     {
//       id: 2,
//       title: 'IBUKI 1st Single「Rise!/We are No.1」',
//       JN: 'IBKI-0001',
//       price: '1500',
//       movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
//       image:'',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     },
//     {
//       id: 3,
//       title: 'IBUKI 1st Single「Rise!/We are No.1」',
//       JN: 'IBKI-0001',
//       price: '1500',
//       movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
//       image:'',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     },
//   ]
// }
//
// const REQUEST = {
//   recommend: [
//     {
//       id: 1,
//       title: 'Sky Killer',
//       record: 'FATE GEAR Album',
//       movie: 'https://www.youtube.com/embed/tLQbsoKQN-0?start=1',
//       description: `メタルなナンバーぜひお聞きください`,
//       purchase: {
//         amazon: 'http://',
//         towerRecord: 'http://',
//         discUnion: 'http://',
//         spotify: '',
//       }
//     },
//     {
//       id: 2,
//       title: '魔界',
//       record: '魔界2nd Album',
//       movie: 'https://www.youtube.com/embed/tLQbsoKQN-0?start=1',
//       description: `メタルなナンバーぜひお聞きください`,
//       purchase: {
//         amazon: '',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//       notice: 'この作品は会場のみの販売となっております。',
//     },
//   ],
//   other: [
//     {
//       id: 1,
//       title: '',
//       JN: '',
//       price: '',
//       image:'',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     },
//     {
//       id: 2,
//       title: '',
//       JN: '',
//       price: '',
//       image:'',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     },
//     {
//       id: 3,
//       title: '',
//       JN: '',
//       price: '',
//       image:'',
//       purchase: {
//         amazon: 'http://',
//         towerRecord: '',
//         discUnion: '',
//         spotify: '',
//       },
//     }]
// }
//
// const COVER = {
//   recommend: [{
//     title: '',
//     artist: '',
//     description: ``,
//     movie: '',
//   }],
//   other: [],
// }
//
// export const state = () => ({
//   original: ORIGINAL,
//   request: REQUEST,
//   cover: COVER,
// })
//
// export const getters = {
//   original: (state) => state.original,
//   request: (state) => state.request,
//   cover: (state) => state.cover,
// }


import AWS from "aws-sdk";
import moment from 'moment';

export const state = () => ({
  original: {
    normalList: [],
    recommendList: [],
    pickUpList: []
  },
  request: {
    normalList: [],
    recommendList: [],
    pickUpList: []
  },
  cover: {
    normalList: [],
    recommendList: [],
    pickUpList: []
  },
})

export const getters = {
  original: (state) => state.original,
  request: (state) => state.request,
  cover: (state) => state.cover,
}

export const mutations = {
  mutationSetOriginal(state, dataset, key) {
    state.original[key].push(dataset)
  },
  mutationSetRequest(state, dataset, key) {
    state.request[key].push(dataset)
  },
  mutationSetCover(state, dataset, key) {
    state.cover[key].push(dataset)
  }
}

export const actions = {
  fetchDiscographyList({commit}) {

    //現在時刻
    var newDate = Number(new moment(new Date()).format('YYYYMMDDHHmm'))

    //テーブル検索用パラメーター
    var params = {
      TableName: "ibuki-official",
      ScanIndexForward: true,
      KeyConditionExpression: "#Category = :category",
      ExpressionAttributeNames: {
        // "#Date": "DATE",
        "#Category": "CATEGORY"
      },
      ExpressionAttributeValues: {
        // ":now": newDate,
        ":category": "DISCOGRAPHY"
      },
    };

    // dynamoを作成
    var dynamodb = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
      region: "ap-northeast-1"
    });

    //
    dynamodb.query(params, function (err, dataset) {
      if (err) console.log(err, err.stack); // an error occurred

      dataset.Items.forEach(dataset => {
        // 公開日が今日以前であれば何もしない
        if (newDate < dataset.releaseDate) {
          console.log("公開日前です：" + dataset)
          return
        }

        // 発売日前だったらピックアップに追加
        if (dataset.DATE > dataset.releaseDate) {
          if(dataset.subCategory == 'ORIGINAL') {
            commit('mutationSetOriginal', dataset, 'pickUpList');
            console.log("ピックアップオリジナル作品です：" + dataset)
            return
          }
          if(dataset.subCategory == 'REQUEST') {
            commit('mutationSetRequest', dataset, 'pickUpList');
            console.log("ピックアップリクエスト作品です：" + dataset)
            return
          }
        }

        // リコメンドだったらリコメンドに追加
        if(dataset.subCategory == 'ORIGINAL-recommend') {
          commit('mutationSetOriginal', dataset, 'recommendList');
          console.log("リコメンドオリジナル作品です：" + dataset)
          return
        }
        if(dataset.subCategory == 'REQUEST-recommend') {
          commit('mutationSetRequest', dataset, 'recommendList');
          console.log("リコメンドリクエスト作品です：" + dataset)
          return
        }

        //その他ノーマルリスト振り分ける
        if(dataset.subCategory == 'ORIGINAL') {
          commit('mutationSetOriginal', dataset, 'normalList');
          console.log("通常オリジナル作品です：" + dataset)
          return
        }
        if(dataset.subCategory == 'REQUEST') {
          commit('mutationSetRequest', dataset, 'normalList');
          console.log("通常リクエスト作品です：" + dataset)
          return
        }
      })
    })
  },
}


