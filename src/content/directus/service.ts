import {defineCollection, z} from "astro:content";
import {directus} from "@lib/directus.ts";
import type {PageService} from "@lib/directus-types";
import {readSingleton} from "@directus/sdk";
import {directusFileSchema} from "../shared.ts";

export const bulletPointSchema = z.object({
    icon: z.string().optional(),
    text: z.string().optional(),
    title: z.string().optional(),
})

export type bulletPointType = z.infer<typeof bulletPointSchema>;

export const serviceSectionSchema = z.object({
    slug: z.string().optional(),
    title: z.string().optional(),
    text: z.string().optional(),
    image: directusFileSchema.optional(),
    bulletPoints: z.array(bulletPointSchema).optional(),
})

export type serviceSectionType = z.infer<typeof serviceSectionSchema>;

const servicesSchema = z.object({
    hero_title: z.string().optional(),
    hero_message: z.string().optional(),
    example_title: z.string().optional(),
    example_message: z.string().optional(),
    sections: z.array(serviceSectionSchema).optional(),
});

export type servicesType = z.infer<typeof servicesSchema>;

export const serviceCollection = defineCollection({
    async loader() {
        const page = await directus.request<PageService>(readSingleton('page_service', {
            fields: ["*.*", "section.image.*", "section.translations.*"]} as any));

        console.log('loaded page service')
        return [{
            ...page.translations[0],
            sections: page.section.map(s => ({
                slug: s.slug,
                image: s.image,
                title: s.translations[0]?.title ? s.translations[0].title : undefined,
                text: s.translations[0]?.text ? s.translations[0].text : undefined,
                bulletPoints: s.translations[0]?.bulletpoints ? s.translations[0]?.bulletpoints : []
            })),
            id: 'service',
        }]
    },
    schema: servicesSchema,
});