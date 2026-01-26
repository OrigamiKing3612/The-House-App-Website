// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

export default defineConfig({
    output: "static",
    integrations: [vue()],

    adapter: node({
        mode: "standalone",
    }),
});
