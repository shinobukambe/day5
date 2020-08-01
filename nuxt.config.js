const base_url = 'https://kambe.kikagaku.net/day5/'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '株式会社キカガク | 公式ホームページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/style.css` },
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/lib/swiper.css` }     
    ],
    script: [
      { src: `${base_url}js/lib/jquery-3.4.1.js` },
      { src: `${base_url}js/lib/countTo.js` },
      { src: `${base_url}js/lib/inview.js` },
      { src: `${base_url}js/lib/ofi.js` },
      { src: `${base_url}js/lib/pf.intrinsic.js` },
      { src: `${base_url}js/lib/picturefill.js` },
      { src: `${base_url}js/lib/swiper.js` },
      { src: `${base_url}js/common.js` },
      { src: `${base_url}js/front.js` },
      { src: `${base_url}js/loading.js` },
      { src: `${base_url}js/member.js` }
    ]
  },
  /*z
  ** Global CSS
  */
  css: [
    // '~assets/css/style.css',
    // '~assets/css/lib/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
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
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    dir: 'docs',
    }
}
