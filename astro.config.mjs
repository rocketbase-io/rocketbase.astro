// @ts-check
// @ts-check
import {defineConfig, envField} from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            DIRECTUS_URL: envField.string({
                access: "secret",
                context: "server",
            }),
            DIRECTUS_API_KEY: envField.string({
                access: "secret",
                context: "server",
            }),
        }
    },

    image: {
        domains: ["rcktbs-website-directus.fly.dev"],
    },

    integrations: [tailwind()]
});