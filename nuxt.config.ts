// https://nuxt.com/docs/api/configuration/nuxt-config

/**
 * Relative paths and aliases in Nuxt layers
 * see: https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
 */
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3010
  },
  modules: ["@unocss/nuxt", "@nuxt/fonts"],
  css: [
    "@unocss/reset/normalize.css",
    join(currentDir, "./assets/css/reset.css"),
    join(currentDir, "./assets/css/main.css"),
  ],
});
