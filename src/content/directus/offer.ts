import {defineCollection, z} from "astro:content";
import {directus} from "@lib/directus.ts";
import type {PageOffer} from "@lib/directus-types";
import {readSingleton} from "@directus/sdk";
import {defaultQuery} from "../shared.ts";

export const offerSchema = z.object({
    languages_code: z.string().optional(),
    offer_title: z.string().optional(),
    offer_description: z.string().optional(),
    offer_steps: z
        .array(
            z.object({
                caption: z.string(),
                description: z.string(),
                icon: z.string().optional(),
            })
        )
        .optional(),
    conclusion: z.string().optional(),
    individual_development_title: z.string().optional(),
    individual_development_bulletpoints: z
        .array(
            z.object({
                caption: z.string(),
                description: z.string()
            })
        )
        .optional(),
    hosting_title: z.string().optional(),
    hosting_message: z.string().optional(),
});

export type offerType = z.infer<typeof offerSchema>;

export const offerCollection = defineCollection({
    async loader() {
        const page = await directus.request<PageOffer>(readSingleton('page_offer', defaultQuery));
        const translation = page.translations[0];
        console.log('loaded offer')
        return [{
            ...translation,
            id: 'offer',
        }]
    },
    schema: offerSchema,
});