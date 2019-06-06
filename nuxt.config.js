import pkg from './package'

export default {
  mode: 'universal',

    /*
  ** Headers of the page
  */
 head: {
  title: pkg.name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: pkg.description }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' }
  ]
},

/*
** Customize the progress-bar color
*/
loading: { 
  color: '#dddddd',
  height: '6px'
},

/*
** Global CSS
*/
css: [
  '@/assets/css/app.css'
],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    middleware: 'pageTemplate',
    scrollBehavior (to, from, savedPosition) {
      let position = { x: 0, y: 0 }
      // Keep scroll position when using browser buttons
      if (savedPosition) {
        position = savedPosition
      }
  
      // Workaround for transitions scrolling to the top of the page
      // However, there are still some problems being fixed by the vue team
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(position)
        }, 30)
      })
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
