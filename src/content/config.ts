import {homeCollection} from "./directus/home.ts";
import {customerCollection} from "./directus/customers.ts";
import {referenceCollection} from "./directus/references.ts";
import {testimonialCollection} from "./directus/testimonials.ts";
import {exampleCollection} from "./directus/examples.ts";

export const collections = {
    home: homeCollection,
    customer: customerCollection,
    reference: referenceCollection,
    testimonial: testimonialCollection,
    example: exampleCollection,
};