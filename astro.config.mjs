// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://the-house-app.com",
    output: "static",
    integrations: [vue(), sitemap()],
    experimental: {
        contentIntellisense: true,
    },
    prefetch: true,
});
