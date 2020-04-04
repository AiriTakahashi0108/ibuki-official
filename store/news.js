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
