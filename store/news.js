export const state = () => ({
  newsList: [
    {
      id: '001',
      title:'HPが新しくなりました！',
      data: '2020-04-20 10:00',
      content: `IBUKIのHPが全面リニューアルしました。\nデザイン、コーディング、プログラミング、全てをIBUKI自身で手がけております。`,
      link: '/',
      externalLink: null,
    },
    {
      id: '002',
      title:'IBUKIボイトレブログ開設！',
      data: '2020-05-10 10:00',
      content: `IBUKIのボイトレブログを開設しました！\nご興味ある方は是非ご覧ください。`,
      link: '/schedule',
      externalLink: null,
    },
    {
      id: '003',
      title:'魔界出演決定！',
      data: '2020-06-10 10:00',
      content: `魔界に出演決定しました！\nこちらのサイトをご覧ください。`,
      link: null,
      externalLink: {url:'https://www.makaisyojyoken.com/',name:'魔界HP'}
    },
  ],
})

export const getters = {
  newsList: (state) => state.newsList,
}

// export const mutations = {
//   mutationInitializeForm(state) {
//     state.form = _.cloneDeep(DEFAULT_STATE.default_form)
//   },
//   mutationUpdateForm(state, dataset) { // dataset = { key: value, ... }
//     _.forIn(dataset, (value, key) => {
//       console.log('===' + key + ': ' + value + '===')
//       state.form[key] = value
//     })
//   },
//   mutationUpdateFormArray(state, payload) {
//     Vue.set(state.form[payload.name], payload.index, payload.data)
//   },
//   mutationUpdateTransportValue(state, payload) {
//     state.form.transportInfo[payload.index][payload.key] = payload.value
//     console.log('===transportInfo[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateFloorPlanValue(state, payload) {
//     state.form.floorPlan[payload.index][payload.key] = payload.value
//     console.log('===floorPlan[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateAdvertisersValue(state, payload) {
//     state.form.advertisers[payload.index][payload.key] = payload.value
//     console.log('===advertisers[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateImageOutsideValue(state, payload) {
//     state.form.imageOutsideView[payload.index][payload.key] = payload.value
//     console.log('===imageOutsideView[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationDestroyFormArray(state, payload) {
//     state.form[payload.key].splice(payload.index, 1)
//   },
// }
//
// export const actions = {
//   actionInitializeForm({commit}) {
//     commit('mutationInitializeForm')
//   },
//   actionUpdateForm({commit}, dataset) {
//     commit('mutationUpdateForm', dataset)
//   },
//   async actionSetInitialValue({commit}, {$axios, propertyId, omit}) {
//     // TODO: plugin/auth.jsに移動する
//     $axios.setToken(localStorage.idToken, 'Bearer')
//
//     const response = await $axios.get('/api/property/' + propertyId)
//     const data = _.mapValues(_.omit(_.pickBy(response.data), omit), (value, key) => {
//       return 'completionDate' === key ? moment(value) : value
//     })
//
//     commit('mutationUpdateForm', data)
//   },
//   async actionSetStation({commit}, {$axios, index, code}) {
//     const response = await $axios.get(`/api/stations/${code}`)
//     commit('mutationUpdateTransportValue', {key: 'lineName', value: response.data.line_name, index})
//     commit('mutationUpdateTransportValue', {key: 'stationName', value: response.data.station_name, index})
//   },
//   actionUpdateFormArray({commit}, payload) {
//     commit('mutationUpdateFormArray', payload)
//   },
//   actionUpdateTransportValue({commit}, {key, value, index}) {
//     commit('mutationUpdateTransportValue', {key, value, index})
//   },
//   actionUpdateFloorPlanValue({commit}, {key, value, index}) {
//     commit('mutationUpdateFloorPlanValue', {key, value, index})
//   },
//   actionUpdateAdvertisersValue({commit}, {key, value, index}) {
//     commit('mutationUpdateAdvertisersValue', {key, value, index})
//   },
//   actionUpdateImageOutsideValue({commit}, {key, value, index}) {
//     commit('mutationUpdateImageOutsideValue', {key, value, index})
//   },
//   actionDestroyFormArray({commit}, {key, index}) {
//     commit('mutationDestroyFormArray', {key, index})
//   },
// }
// export const state = () => ({
//   form: _.cloneDeep(DEFAULT_STATE.default_form)
// })
//
// export const getters = {
//   getForm: (state) => state.form,
// }
//
// export const mutations = {
//   mutationInitializeForm(state) {
//     state.form = _.cloneDeep(DEFAULT_STATE.default_form)
//   },
//   mutationUpdateForm(state, dataset) { // dataset = { key: value, ... }
//     _.forIn(dataset, (value, key) => {
//       console.log('===' + key + ': ' + value + '===')
//       state.form[key] = value
//     })
//   },
//   mutationUpdateFormArray(state, payload) {
//     Vue.set(state.form[payload.name], payload.index, payload.data)
//   },
//   mutationUpdateTransportValue(state, payload) {
//     state.form.transportInfo[payload.index][payload.key] = payload.value
//     console.log('===transportInfo[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateFloorPlanValue(state, payload) {
//     state.form.floorPlan[payload.index][payload.key] = payload.value
//     console.log('===floorPlan[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateAdvertisersValue(state, payload) {
//     state.form.advertisers[payload.index][payload.key] = payload.value
//     console.log('===advertisers[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationUpdateImageOutsideValue(state, payload) {
//     state.form.imageOutsideView[payload.index][payload.key] = payload.value
//     console.log('===imageOutsideView[' + payload.index + ']===' + payload.key + ': ' + payload.value + '===')
//   },
//   mutationDestroyFormArray(state, payload) {
//     state.form[payload.key].splice(payload.index, 1)
//   },
// }
//
// export const actions = {
//   actionInitializeForm({commit}) {
//     commit('mutationInitializeForm')
//   },
//   actionUpdateForm({commit}, dataset) {
//     commit('mutationUpdateForm', dataset)
//   },
//   async actionSetInitialValue({commit}, {$axios, propertyId, omit}) {
//     // TODO: plugin/auth.jsに移動する
//     $axios.setToken(localStorage.idToken, 'Bearer')
//
//     const response = await $axios.get('/api/property/' + propertyId)
//     const data = _.mapValues(_.omit(_.pickBy(response.data), omit), (value, key) => {
//       return 'completionDate' === key ? moment(value) : value
//     })
//
//     commit('mutationUpdateForm', data)
//   },
//   async actionSetStation({commit}, {$axios, index, code}) {
//     const response = await $axios.get(`/api/stations/${code}`)
//     commit('mutationUpdateTransportValue', {key: 'lineName', value: response.data.line_name, index})
//     commit('mutationUpdateTransportValue', {key: 'stationName', value: response.data.station_name, index})
//   },
//   actionUpdateFormArray({commit}, payload) {
//     commit('mutationUpdateFormArray', payload)
//   },
//   actionUpdateTransportValue({commit}, {key, value, index}) {
//     commit('mutationUpdateTransportValue', {key, value, index})
//   },
//   actionUpdateFloorPlanValue({commit}, {key, value, index}) {
//     commit('mutationUpdateFloorPlanValue', {key, value, index})
//   },
//   actionUpdateAdvertisersValue({commit}, {key, value, index}) {
//     commit('mutationUpdateAdvertisersValue', {key, value, index})
//   },
//   actionUpdateImageOutsideValue({commit}, {key, value, index}) {
//     commit('mutationUpdateImageOutsideValue', {key, value, index})
//   },
//   actionDestroyFormArray({commit}, {key, index}) {
//     commit('mutationDestroyFormArray', {key, index})
//   },
// }
