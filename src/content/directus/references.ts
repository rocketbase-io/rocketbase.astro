import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {References} from "../../lib/directus-types";
import {readItems} from "@directus/sdk";
import {customersSchema} from "./customers.ts";
import {directusFileSchema} from "../shared.ts";
import * as R from "remeda";

export const techstacksSchema = z.object({
    color: z.string().optional(),
    id: z.number(),
    logo: z.string().optional(),
    icon: directusFileSchema.optional(),
    name: z.string(),
    textColor: z.string(),
    url: z.string().optional()
})

export const referencesSchema = z.object({
    customer: customersSchema,
    review_avatar: directusFileSchema.optional(),
    review_biography: z.string().optional(),
    screens: z.array(directusFileSchema).optional(),
    slug: z.string(),
    sort: z.number().nullable(),
    status: z.string(),
    teaser: directusFileSchema.optional(),
    techstacks: z.array(techstacksSchema).optional(),

    // translation schema
    achievements: z
        .array(
            z.object({
                text: z.string(),
                icon: z.string()
            })
        )
        .optional(),
    background: z.string().optional(),
    intro: z.string().optional(),
    languages_code: z.string().optional(),
    references_id: z.number().optional(),
    responsibilities: z
        .array(
            z.object({
                text: z.string(),
                outline: z.string()
            })
        )
        .optional(),
    title: z.string(),
    review_summary: z.string().optional()
})

export const referencesCollection = defineCollection({
    async loader() {
        const references = await directus.request<References[]>(readItems('references', {
            filter: {
                status: {_eq: "published"},
            },
            sort: ['sort', 'id'],
            fields: ["*.*", "techstacks.techstacks_id.*", "techstacks.techstacks_id.icon.*", "customer.logo.*", "screens.directus_files_id.*"]} as any));

        console.log('loaded references')
        return references.map(r => {
            const translation = r.translations[0];
            const techstacks = r.techstacks ? r.techstacks.map(v => v.techstacks_id) : undefined;
            const screens = r.screens ? r.screens.map(v => v.directus_files_id) : undefined;
            return {
                ...(R.pipe(r, R.omit(['translations']))) ,
                ...translation,
                techstacks,
                screens,
                id: `${r.id}`
            };
        });
    },
    schema: referencesSchema,
});