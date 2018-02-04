module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'syrjs_static',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static syrjs via Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/codemirror.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/javascript/javascript.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js' }
    ]
  },
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/codemirror.css',
    '~/assets/css/monokai.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#adff2f' },
  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
