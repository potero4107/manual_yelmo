// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        ["vue3-notion/nuxt", { css: true }],
    ],
  })
  