const ORIGINAL = {
  recommend: [
    {
      id: 1,
      title: 'Rise!',
      record: 'IBUKI 1st Single「Rise!」',
      movie: '',
      description: `90年代を思わせるシンセサイザーや楽曲イメージに、2バスとシンセバスを重ね、斬新なアレンジ。`,
      buy: {
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
      movie: '',
      description: `IBUKI率いる、懐メロをメタルアレンジするバンドNATSUMETAL収録作品`,
      buy: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    }
  ],
  content: [
    {
      id: 1,
      title: '',
      JN: '',
      price: '',
      movie: '',
      image:'',
      buy: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 1,
      title: '',
      JN: '',
      price: '',
      movie: '',
      image:'',
      buy: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    },
    {
      id: 1,
      title: '',
      JN: '',
      price: '',
      buy: {
        amazon: 'http://',
        towerRecord: '',
        discUnion: '',
        spotify: '',
      },
    }]
}

const REQUEST = {
  recommend: [
    {
      id: 1,
      title: 'Sky Killer',
      record: 'FATE GEAR',
      movie: '',
      description: `メタルなナンバー`,
      buy: {
        amazon: 'http://',
        towerRecord: 'http://',
        discUnion: 'http://',
        spotify: '',
      },
    },
  ],
  content: [
    {
      id: 1,
      title: '',
      JN: '',
      price: '',
      image:'',
      buy: {
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
      buy: {
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
      buy: {
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
  content: [],
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
