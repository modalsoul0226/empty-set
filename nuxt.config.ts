// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
      port: 3010
  },
  modules: ["@unocss/nuxt", "@nuxt/fonts"],
  css: ["~/assets/css/main.css", "~/assets/css/reset.css", "@unocss/reset/normalize.css"],
});
