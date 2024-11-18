import {homeCollection} from "./directus/home.ts";
import {customerCollection} from "./directus/customers.ts";
import {referenceCollection} from "./directus/references.ts";

export const collections = {
    home: homeCollection,
    customer: customerCollection,
    reference: referenceCollection,
};