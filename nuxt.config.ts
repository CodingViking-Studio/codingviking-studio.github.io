// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js' }],
    },
  },
  modules: ['@nuxt/ui', '@nuxt/image'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/cursor.css',
    '~/assets/css/custom.css',
    '~/assets/css/main.css'
  ]
})