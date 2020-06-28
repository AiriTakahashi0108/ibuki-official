import axios from 'axios'
import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Tokyo')

export const state = () => ({
  newsList: [],
})

export const getters = {
  newsList: (state) => state.newsList,
}

export const mutations = {
  mutationSetNewsList(state, dataset) {
    state.newsList = dataset
  }
}

export const actions = {
  async fetchNewsList({commit}) {



    //現在時刻
    const isoStr = new Date().toISOString();
    var newDate = Number(new moment(isoStr).format('YYYYMMDDHHmm'))

    // データを取得
    await axios.get('https://jojvh1wlfk.execute-api.ap-northeast-1.amazonaws.com/ibuki-official/?category=NEWS&date=' + newDate).then(res => {
      commit('mutationSetNewsList', res.data.Items)
    }).catch(e => {
      console.log(e)
    })
  },
}


