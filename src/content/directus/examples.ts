import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {Examples} from "../../lib/directus-types";
import {readItems} from "@directus/sdk";
import {directusFileSchema} from "../shared.ts";
import * as R from "remeda";


export const examplesSchema = z.object({
    feature_image: directusFileSchema.optional(),
    hero_image: directusFileSchema.optional(),
    references: z.array(z.string()).optional(),
    slug: z.string(),
    sort: z.number().nullable(),
    status: z.string(),

    feature_bulletpoints: z.unknown().optional(),
    feature_message: z.string().optional(),
    feature_title: z.string().optional(),
    hero_message: z.string().optional(),
    hero_title: z.string().optional(),
    languages_code: z.string().optional(),
    reference_message: z.string().optional(),
    reference_title: z.string().optional()
})

export type exampleType = z.infer<typeof examplesSchema>;

export const exampleCollection = defineCollection({
    async loader() {
        const examples = await directus.request<Examples[]>(readItems('examples', {
            filter: {
                status: {_eq: "published"},
            },
            sort: ['sort', 'id'],
            fields: ["*.*", "customer.logo"]} as any));

        console.log('loaded examples')
        return examples.map(e => {
            const translation = e.translations[0];
            const references = e.references ? e.references.map(v => `${v.references_id}`) : undefined;
            const value = {
                ...(R.pipe(e, R.omit(['translations']))) ,
                ...translation,
                references,
                id: `${e.id}`
            };
            return value;
        });
    },
    schema: examplesSchema,
});