import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {Customers} from "../../lib/directus-types";
import {readItems} from "@directus/sdk";
import {directusFileSchema} from "../shared.ts";

export const customersSchema =  z.object({
        logo: directusFileSchema,
        name: z.string(),
        sort: z.number().nullable(),
        status: z.string(),
        url: z.string().optional()
    });

export const customerCollection = defineCollection({
    async loader() {
        const customers = await directus.request<Customers[]>(readItems('customers', {
            filter: {
                status: {_eq: "published"},
            },
            sort: ['sort', 'id'],
            fields: ["*.*"]} as any));
        console.log('loaded customers')
        return customers.map(c => ({
            ...c,
            id: `${c.id}`
        }));
    },
    schema: customersSchema,
});