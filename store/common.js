export const state = () => ({
  linkName: {
    '/': 'TOP',
    '/profile': 'PROFILE',
    '/discography': 'DISCOGRAPHY',
    '/discography/cover': ['DISCOGRAPHY','カバー動画'],
    '/discography/request': ['DISCOGRAPHY','依頼作品'],
    '/schedule': 'SCHEDULE',
    '/contact': 'CONTACT',
  }
})

export const getters = {
  linkName: (state) => state.linkName,
}
