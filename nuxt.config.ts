// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: '/js/basic.js' }, { src: '/js/cursor.js' }, { src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js' }],
    },
  },
  modules: ['@nuxt/ui'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/cursor.css',
    '~/assets/css/custom.css',
    '~/assets/css/input.css',
    '~/assets/css/output.css',
    '~/assets/css/main.css'
  ]
})
