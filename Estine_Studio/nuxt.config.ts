// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxt-alt/proxy'],
  axios:{
    proxy: true
  },
  proxy: {
    proxies: {
      '/api/': {
        target: 'http://127.0.0.1:3006',
        changeOrigin: true // 允許cors跨域
      }
    }
  }
})
