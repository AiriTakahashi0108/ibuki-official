const LIVE = [
  {
    id: 1,
    liftingStatus: true,
    title: 'THE魔界 ~天国への階段~',
    data: '2020-02-27',
    place: {
      title: '新木場1stリング',
      url: 'http://',
      pref: '東京都'
    },
    open: '18:00',
    start: '19:00',
    advanceTicket: 5000,
    dayTicket: 5500,
    ticketStatus: {
      data: '2020-02-14',
      reservation: [{
        title: 'e-plus',
        url: 'http://'
      }],
      stop: false,
    },
    details:{
      text: `総合エンターテイメント！！`,
      url:'http://',
      urlName:'THE 魔界HP',
    },
    image: '~/assets/images/sample-liveImage3.jpg',
  }
]
const RELEASE =  [{

}]

const OTHER = [{}]

export const state = () => ({
  live: LIVE,
  release: RELEASE,
  other: OTHER,
})

export const getters = {
  live: (state) => state.live,
  release: (state) => state.release,
  other: (state) => state.other,
}
