import _ from 'lodash'

export const state = () => ({
  form: {
    name: '',
    mail: '',
    matter: '',
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
  mutationClearForm(state) {
    _.forIn(state.form, (value, key, object) => {
      object[key] = ''
    })
  }
}

export const actions = {
  actionUpdateForm({commit}, dataset) {
    commit('mutationUpdateForm', dataset)
  },
  actionClearForm({commit}) {
    commit('mutationClearForm')
  }
}
