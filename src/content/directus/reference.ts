import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {PageReference} from "../../lib/directus-types";
import {readSingleton} from "@directus/sdk";
import {defaultQuery} from "../shared.ts";

export const referenceCollection = defineCollection({
    async loader() {
        const page = await directus.request<PageReference>(readSingleton('page_reference', defaultQuery));
        const translation = page.translations[0];
        console.log('loaded page reference')
        return [{
            ...translation,
            id: 'reference',
        }]
    },
    schema: z.object({
        hero_title: z.string().optional(),
        hero_message: z.string().optional(),
        reference_title: z.string().optional(),
        reference_message: z.string().optional(),
        techstack_title: z.string().optional(),
    }),
});