import {homeCollection} from "./directus/home.ts";
import {customerCollection} from "./directus/customers.ts";
import {testimonialCollection} from "./directus/testimonials.ts";
import {exampleCollection} from "./directus/examples.ts";
import {serviceCollection} from "./directus/service.ts";
import {referenceCollection} from "./directus/reference.ts";
import {referencesCollection} from "./directus/references.ts";
import {benefitCollection} from "./directus/benefit.ts";

export const collections = {
    home: homeCollection, // Page
    service: serviceCollection, // Page
    reference: referenceCollection, // Page
    customer: customerCollection,
    references: referencesCollection,
    testimonial: testimonialCollection,
    example: exampleCollection,
    benefit: benefitCollection,
};