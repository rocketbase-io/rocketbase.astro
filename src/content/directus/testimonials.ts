import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {References, Testimonials} from "../../lib/directus-types";
import {readItems} from "@directus/sdk";
import {customersSchema} from "./customers.ts";
import {directusFileSchema} from "../shared.ts";
import * as R from "remeda";


export const testimonialsSchema = z.object({
    avatar: directusFileSchema.optional(),
    customer: customersSchema.optional(),
    name: z.string(),
    position: z.string(),
    sort: z.number().nullable(),
    status: z.string(),
    message: z.string().optional(),
})

export const testimonialCollection = defineCollection({
    async loader() {
        const testimonials = await directus.request<Testimonials[]>(readItems('testimonials', {
            filter: {
                status: {_eq: "published"},
            },
            sort: ['sort', 'id'],
            fields: ["*.*", "customer.logo.*"]} as any));

        console.log('loaded testimonials')
        return testimonials.map(t => {
            const translation = t.translations[0];
            return {
                ...(R.pipe(t, R.omit(['translations']))) ,
                ...translation,
                ...t,
                id: `${t.id}`
            };
        });
    },
    schema: testimonialsSchema,
});