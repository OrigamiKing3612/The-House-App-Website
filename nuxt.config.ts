import { defineNuxtConfig } from 'nuxt/config';

const title = "The House App";
const description = "The House App is a cutting-edge tool designed to enrich the educational journey for students and teachers alike. It offers insights to track house-related activities and achievements, fostering engagement within the school community."

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
                { name: "title", content: title },
                { name: "description", content: description },
                { name: "publisher", content: "OrigamiKing3612" },
                { name: "keywords", content: "The House App, The House App Desktop, The House App App" },
                { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#ffffff" },
                { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#000000" },
                { name: "background-color", media: "(prefers-color-scheme: light)", content: "#ffffff" },
                { name: "background-color", media: "(prefers-color-scheme: dark)", content: "#000000" },
                { property: "og:locale", content: "en_US" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: title },
                { property: "og:site_name", content: title },
                { property: "og:description", content: description },
                { property: "og:url", content: "https://the-house-app.com" },
            ],
            link: [
                { rel: "manifest", href: "/manifest.json" },
                { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
                { rel: "alternate", type: "application/rss+xml", title: "The House App RSS Feed", href: "/rss.xml" },
            ]
        },
        viewTransition: true
    },
    nitro: {
        prerender: {
            failOnError: true,
            crawlLinks: true,
            routes: ["/sitemap.xml", "/robots.txt", "/rss.xml", "/status"],
            ignore: ["/bugs"]
        },
        logLevel: 3,
    },
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint", "@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxt/image", "@nuxt/content"],
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
    },
    site: {
        url: 'https://the-house-app.com',
        name: title,
    },
    robots: {
        sitemap: '/sitemap.xml',
    },
    content: {

    }
    // content: {
    //     build: {
    //         markdown: {
    //             highlight: {
    //                 theme: {
    //                     default: 'material-theme-lighter',
    //                     dark: 'material-theme-palenight'
    //                 },
    //                 langs: ['sql', 'diff', 'ini']
    //             }
    //         }
    //     },
    //     preview: {
    //         api: 'https://api.nuxt.studio'
    //     }
    // },
})
