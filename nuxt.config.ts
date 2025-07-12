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
    compatibilityDate: "2024-07-14",
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: title,
            meta: Object.entries(meta).map(([name, content]): object => {
                return { name, content };
            }),
            link: [
                { rel: "manifest", href: "/manifest.json" },
                { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
            ]
        },
        viewTransition: true
    },
    nitro: {
        prerender: {
            failOnError: false,
        }
    },
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint"],
    css: ['@/assets/styles/main.scss'],
    devtools: { enabled: true },
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
