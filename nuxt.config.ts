// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
