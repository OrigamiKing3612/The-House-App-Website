import { defineNuxtConfig } from 'nuxt/config';

const title = "The House App";
const metaName = {
    description: "The House App is a cutting-edge tool designed to enrich the educational journey for students and teachers alike. It offers insights to track house-related activities and achievements, fostering engagement within the school community.",
    publisher: "OrigamiKing3612",
    keywords: "The House App, The House App Desktop, The House App App",
    "apple-mobile-web-app-title": "The House App",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "viewport": "width=device-width, initial-scale=1, maximum-scale=1",
};

const metaProperty = {
    "og:locale": "en_US",
    "og:type": "website",
    "og:title": title,
    "og:site_name": title,
    "og:description": "The House App",
    "og:url": "https://the-house-app.com"
};
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4
    },
    compatibilityDate: "2025-07-18",
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: title,
            meta: [
                ...Object.entries(metaName).map(([name, content]) => ({ name, content })),
                ...Object.entries(metaProperty).map(([property, content]) => ({ property, content })),
            ],
            link: [
                { rel: "manifest", href: "/manifest.json" },
                { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
            ]
        },
        viewTransition: true
    },
    nitro: {
        prerender: {
            failOnError: true,
        },
        logLevel: 3,
    },
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint", "@nuxtjs/robots", "@nuxtjs/sitemap"],
    devtools: { enabled: true },
    css: ['~/assets/styles/main.scss'],
    components: [
        { path: "~/components/", pathPrefix: false }
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/styles/lib/_variables.scss" as *;
                        @use "@/assets/styles/lib/_colors.scss" as *;
                        @use "@/assets/styles/lib/_housecolors.scss" as *;
                    `
                }
            }
        }

    },
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "dark",
        storageKey: "thehouseapp-theme",
    },
    site: {
        url: 'https://the-house-app.com',
        name: 'The House App'
    },
    robots: {
        sitemap: '/sitemap.xml',
    }
})
