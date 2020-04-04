export const state = () => ({
  form: {
    name: '',
    mail: '',
    mailVerification: '',
    about: {
      selected: '',
      option: [
        {
          name: '出演依頼',
          value: 'castRequest'
        },
        {
          name: 'レコーディング依頼',
          value: 'recordingRequest'
        },
        {
          name: 'ボイストレーニングについて',
          value: 'voiceTraining'
        },
        {
          name: 'ファンメッセージ',
          value: 'fanMessage'
        },
        {
          name: 'その他',
          value: 'other'
        },
      ],
    },
    comment: ``,
  }
})

export const getters = {
  form: (state) => state.form,
}
