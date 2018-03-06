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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/codemirror.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/theme/monokai.min.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/codemirror.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/javascript/javascript.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js' }
    ]
  },
  css: [],
  /*
  ** Axios http
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: false
  },
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
