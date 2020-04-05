import _ from 'lodash'

export const state = () => ({
  form: {
    name: '8888',
    mail: '',
    selected: '',
    selectOption: [
      '出演依頼',
      'レコーディング依頼',
      'ボイストレーニングについて',
      'ファンメッセージ',
      'その他',
    ],
    comment: ``,
  }
})

export const getters = {
  form: (state) => state.form,
}

export const mutations = {
  mutationUpdateForm(state, dataset) {
    _.forIn(dataset, (value, key) => {
      state.form[key] = value
    })
  },
}

export const actions = {
  actionUpdateForm({commit}, dataset) {
    commit('mutationUpdateForm', dataset)
  },
}
