// @ts-check
// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
    site: "https://www.rocketbase.io",

    experimental: {contentLayer: true},

    vite: {
        optimizeDeps: {
            include: ['preline'],
        },
    },

    image: {
        domains: ["rcktbs-website-directus.fly.dev"],
    },

    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
        icon(),
        sitemap()]
});