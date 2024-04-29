// https://nuxt.com/docs/api/configuration/nuxt-config
const title = "The House App";
const meta = {
  description: "The House App",
  publisher: "OrigamiKing3612",
  "og:title": title,
  "og:site_name": title,
  "og:description": "The House App",
  "og:type": title,
  "og:url": "the-house-app.com"
};

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: title,
      meta: Object.entries(meta).map(([name, content]): object => {
        return { name, content };
      })
    },
    viewTransition: true
  },
  devtools: { enabled: true },
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/main.scss" as *;`
        }
      }
    }
  }
})
