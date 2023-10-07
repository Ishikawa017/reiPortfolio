import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  app: {
    baseURL: "/reiPortfolio/",
    cdnURL: "/reiPortfolio/",
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
});
