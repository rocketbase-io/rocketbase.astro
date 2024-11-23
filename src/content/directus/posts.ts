import {defineCollection, z} from "astro:content";
import {directus} from "@lib/directus.ts";
import type {Posts} from "@lib/directus-types";
import {readItems} from "@directus/sdk";
import {directusFileSchema} from "../shared.ts";

export const postsSchema =  z.object({
        teaser: directusFileSchema.optional(),
        date_created: z.string(),
        date_updated: z.string().optional(),
        title: z.string().optional(),
        slug: z.string(),
        intro: z.string().optional(),
        content: z.string().optional(),
    });

export type postsType = z.infer<typeof postsSchema>;

export const postsCollection = defineCollection({
    async loader() {
        const posts = await directus.request<Posts[]>(readItems('posts', {
            filter: {
                status: {_eq: "published"},
            },
            fields: ["*.*"]} as any));
        console.log('loaded posts')
        return posts.map(p => ({
            ...p,
            id: `${p.id}`,
            slug: p.translations[0].slug,
            title: p.translations[0].title,
            intro: p.translations[0].intro,
            content: p.translations[0].content
        }));
    },
    schema: postsSchema,
});