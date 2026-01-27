// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

export default defineConfig({
    output: "static",
    integrations: [vue()],
    experimental: {
        contentIntellisense: true,
    },

    // adapter: node({
    //     mode: "standalone",
    // }),
});
