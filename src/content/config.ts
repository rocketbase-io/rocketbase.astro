import {homeCollection, customerCollection, testimonialCollection, exampleCollection, serviceCollection, referenceCollection, referencesCollection, benefitCollection, postsCollection} from "./directus";
import {offerCollection} from "@content/directus/offer.ts";

export const collections = {
    home: homeCollection, // Page
    service: serviceCollection, // Page
    reference: referenceCollection, // Page
    offer: offerCollection, // Page
    customer: customerCollection,
    references: referencesCollection,
    testimonial: testimonialCollection,
    example: exampleCollection,
    benefit: benefitCollection,
    posts: postsCollection,
};