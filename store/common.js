export const state = () => ({
  linkName: {
    '/': {
      name: 'TOP',
      jp: 'トップ'
    },
    '/profile': {
      name: 'PROFILE',
      jp: 'プロフィール'
    },
    '/discography': {
      name: 'DISCOGRAPHY',
      jp: '作品紹介'
    },
    '/discography/cover': {
      name: 'DISCOGRAPHY',
      jp: 'カバー動画'
    },
    '/discography/request': {
      name: 'DISCOGRAPHY',
      jp: '依頼作品'
    },
    '/schedule': {
      name: 'SCHEDULE',
      jp: 'スケジュール'
    },
    '/contact': {
      name: 'CONTACT',
      jp: 'コンタクト'
    },
  }
})

export const getters = {
  linkName: (state) => state.linkName,
}
