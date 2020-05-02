require('dotenv').config();
const {API} = process.env;

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate:  ' : IBUKI ~official~',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~assets/styles/normalize.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/aws-api'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          features: {
            'nesting-rules': true,
          }
        }),
      ]
    },
    extend(config, ctx) {
    }
  },
  env: {
    API
  }
}
