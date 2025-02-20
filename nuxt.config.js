const frontEndUrl = process.env.DOMAIN_FRONT;
const backEndUrl = process.env.DOMAIN_BACK;


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vstore',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    host: 0
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  env: {
    backEndUrl: process.env.DOMAIN_BACK,
    // frontEndUrl: process.env.DOMAIN_FRONT
  },

  axios: {
    // baseURL: 'http://localhost:8000',
    baseURL: backEndUrl,

  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
