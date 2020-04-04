const ORIGINAL = {
  recommend: [
    {
      id: 1,
      title: 'Rise!',
      record: 'IBUKI 1st Single「Rise!」',
      movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
      description: `90年代を思わせるシンセサイザーや楽曲イメージに、2バスとシンセバスを重ね、斬新なアレンジ。`,
      purchase: {
        amazon: 'http://',
        towerRecord: 'http://',
        discUnion: 'http://',
        spotify: 'http://',
      },
    },
    {
      id: 2,
      title: 'DESIRE -情熱-!',
      record: 'NATSUMETAL 1st Album「NATSUMETAL」',
      movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
      description: `IBUKI率いる、懐メロをメタルアレンジするバンドNATSUMETAL収録作品`,
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    }
  ],
  other: [
    {
      id: 1,
      title: 'IBUKI 1st Single「Rise!/We are No.1」',
      JN: 'IBKI-0001',
      price: '1500',
      movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
      image:'~assets/image/jacket-sample.jpg',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 2,
      title: 'IBUKI 1st Single「Rise!/We are No.1」',
      JN: 'IBKI-0001',
      price: '1500',
      movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
      image:'',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 3,
      title: 'IBUKI 1st Single「Rise!/We are No.1」',
      JN: 'IBKI-0001',
      price: '1500',
      movie: 'https://www.youtube.com/embed/eOmdH6yUy_s?start=1',
      image:'',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
  ]
}

const REQUEST = {
  recommend: [
    {
      id: 1,
      title: 'Sky Killer',
      record: 'FATE GEAR Album',
      movie: 'https://www.youtube.com/embed/tLQbsoKQN-0?start=1',
      description: `メタルなナンバーぜひお聞きください`,
      purchase: {
        amazon: 'http://',
        towerRecord: 'http://',
        discUnion: 'http://',
        spotify: '',
      }
    },
    {
      id: 2,
      title: '魔界',
      record: '魔界2nd Album',
      movie: 'https://www.youtube.com/embed/tLQbsoKQN-0?start=1',
      description: `メタルなナンバーぜひお聞きください`,
      purchase: {
        amazon: '',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
      notice: 'この作品は会場のみの販売となっております。',
    },
  ],
  other: [
    {
      id: 1,
      title: '',
      JN: '',
      price: '',
      image:'',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 2,
      title: '',
      JN: '',
      price: '',
      image:'',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 3,
      title: '',
      JN: '',
      price: '',
      image:'',
      purchase: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    }]
}

const COVER = {
  recommend: [{
    title: '',
    artist: '',
    description: ``,
    movie: '',
  }],
  other: [],
}

export const state = () => ({
  original: ORIGINAL,
  request: REQUEST,
  cover: COVER,
})

export const getters = {
  original: (state) => state.original,
  request: (state) => state.request,
  cover: (state) => state.cover,
}
