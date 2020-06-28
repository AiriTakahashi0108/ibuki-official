import axios from 'axios'
import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Tokyo')

export const state = () => ({
  original: {
    list: [],
    recommendList: [],
    pickUpList: []
  },
  request: {
    list: [],
    recommendList: [],
    pickUpList: []
  },
  cover: {
    list: [],
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
  mutationSetOriginal(state, dataset) {
    state.original[dataset.key].push(dataset.data)
    // console.log("オリジナル"+ dataset.data)
    // console.log(dataset.key)
  },
  mutationSetRequest(state, dataset) {
    state.request[dataset.key].push(dataset.data)
     //console.log(dataset)
    // console.log(dataset)
  },
  mutationSetCover(state, dataset, key) {
    state.cover[dataset.key].push(dataset.data)
    //console.log(dataset)
  }
}

export const actions = {
  async fetchDiscographyList({commit}) {

    //現在時刻
    const isoStr = new Date().toISOString();
    var newDate = Number(new moment(isoStr).format('YYYYMMDDHHmm'))
    var newDateDay = Number(new moment(isoStr).add(7, 'days').format('YYYYMMDD'))

    console.log(newDate)
    console.log(newDateDay)

    // データを取得
    await axios.get('https://jojvh1wlfk.execute-api.ap-northeast-1.amazonaws.com/ibuki-official/?category=DISCOGRAPHY&date=' + newDate)
      .then(res => {
        // console.log(res.data.Items)
        res.data.Items.forEach(dataset => {

        // リコメンドだったらリコメンドに追加
        if(dataset.subCategory == 'ORIGINAL-recommend') {
          commit('mutationSetOriginal', {data: dataset, key: 'recommendList'});
          console.log("リコメンドオリジナル作品です：" + dataset.title)
          return
        }
        if(dataset.subCategory == 'REQUEST-recommend') {
          commit('mutationSetRequest', {data: dataset, key:'recommendList'});
          console.log("リコメンドリクエスト作品です：" + dataset.title)
          return
        }

        // 発売日前か当日だったらピックアップに追加
        var releaseDateDay = Math.floor(dataset.releaseDate / 10000);

        if (newDateDay <= releaseDateDay) {
          if(dataset.subCategory == 'ORIGINAL') {
            dataset.pickUp = true
            commit('mutationSetOriginal', {data: dataset, key: 'pickUpList'});
            console.log("ピックアップオリジナル作品です：" + dataset)
            return
          }
          if(dataset.subCategory == 'REQUEST') {
            commit('mutationSetRequest', {data: dataset, key: 'pickUpList'});
            console.log("ピックアップリクエスト作品です：" + dataset.title)
            return
          }
        }

        //その他ノーマルリスト振り分ける
        if(dataset.subCategory == 'ORIGINAL') {
          commit('mutationSetOriginal', {data: dataset, key:'list'});
          console.log("通常オリジナル作品です：" + dataset.title)
          return
        }
        if(dataset.subCategory == 'REQUEST') {
          commit('mutationSetRequest', {data:dataset, key:'list'});
          console.log("通常リクエスト作品です：" + dataset.title)
          return
        }
      })
    }).catch(e => {
      console.log(e)
    })
  },
}


