// @ts-check
// @ts-check
import {defineConfig, envField} from 'astro/config';

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    experimental: { contentLayer: true },

    image: {
        domains: ["rcktbs-website-directus.fly.dev"],
    },

    integrations: [tailwind({
        applyBaseStyles: false,
    }), mdx()]
});