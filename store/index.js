export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('news/fetchNewsList')
    await dispatch('discography/fetchDiscographyList')
  }
}
