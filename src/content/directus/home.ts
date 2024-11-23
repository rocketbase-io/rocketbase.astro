import {defineCollection, z} from "astro:content";
import {directus} from "@lib/directus.ts";
import type {PageHome} from "@lib/directus-types";
import {readSingleton} from "@directus/sdk";
import {defaultQuery} from "../shared.ts";

export const homeSchema = z.object({
    company_title: z.string().optional(),
    founder_text: z.string().optional(),
    founder_title: z.string().optional(),
    hero_title: z.string().optional(),
    hero_message: z.string().optional(),
    languages_code: z.string().optional(),
    reference_title: z.string().optional(),
    reference_subtitle: z.string().optional(),
    reference_teaser: z.string().optional(),
    service_title: z.string().optional(),
    service_subtitle: z.string().optional(),
    service_teaser: z.string().optional(),
});

export type homeType = z.infer<typeof homeSchema>;

export const homeCollection = defineCollection({
    async loader() {
        const page = await directus.request<PageHome>(readSingleton('page_home', defaultQuery));
        const translation = page.translations[0];
        console.log('loaded home')
        return [{
            ...translation,
            id: 'home',
        }]
    },
    schema: homeSchema,
});