import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ishikawa's Portfolio",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        {
          property: "og:url",
          content: "https://ishikawa017.github.io/reiPortfolio/",
        },
        { property: "og:title", content: "Ishikawa's Portfolio" },
        {
          property: "og:site:name",
          content: "Ishikawa's Portfolio",
        },
      ],
    },
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
