import { defineNuxtConfig } from 'nuxt/config';

const title = "The House App";
const meta = {
    description: "The House App",
    publisher: "OrigamiKing3612",
    keywords: "The House App, The House App Desktop, The House App App",
    "og:locale": "en_US",
    "og:type": "website",
    "og:title": title,
    "og:site_name": title,
    "og:description": "The House App",
    "og:url": "the-house-app.com",
    "apple-mobile-web-app-title": "The House App",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
};

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 3
    },
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
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint"],
    devtools: { enabled: true },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/styles/main.scss" as *;`
                }
            }
        }
    },
    components: [
        { path: "~/components/", pathPrefix: false }
    ],
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "dark",
        storageKey: "thehouseapp-theme",
    },
})
