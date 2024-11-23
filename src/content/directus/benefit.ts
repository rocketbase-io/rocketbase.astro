import {defineCollection, z} from "astro:content";
import {directus} from "../../lib/directus.ts";
import type {BenefitIndividual} from "../../lib/directus-types";
import {readSingleton} from "@directus/sdk";
import {defaultQuery} from "../shared.ts";
import {bulletPointSchema} from "./service.ts";
import {examplesSchema} from "./examples.ts";

const questionSchema = z.object({
    question: z.string().optional(),
    answer: z.string().optional(),
})

export type questionType = z.infer<typeof questionSchema>;

const benefitSchema = z.object({
    faq_title: z.string().optional(),
    faq_questions: z.array(questionSchema).optional(),
    offer_title: z.string().optional(),
    offer_message: z.string().optional(),
    offer_bulletpoints: z.array(bulletPointSchema).optional(),
    cta_title: z.string().optional(),
    cta_message: z.string().optional(),
    cta_bulletpoints: z.array(bulletPointSchema).optional(),
    challenge_title: z.string().optional(),
    challenge_message: z.string().optional(),
    challenge_button: z.string().optional(),
    challenge_bulletpoints: z.array(bulletPointSchema).optional(),
    challenge_title_rotator: z.array(z.string()).optional(),
    challenge_heading: z.array(z.string()).optional(),
});

export type benefitType = z.infer<typeof benefitSchema>;

export const benefitCollection = defineCollection({
    async loader() {
        const page = await directus.request<BenefitIndividual>(readSingleton('benefit_individual', defaultQuery));
        const translation = page.translations[0];
        console.log('loaded benefit-individual')
        return [{
            ...translation,
            id: 'benefit',
        }]
    },
    schema: benefitSchema,
});