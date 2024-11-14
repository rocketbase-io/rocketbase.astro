import {homeCollection} from "./directus/home.ts";
import {customerCollection} from "./directus/customers.ts";

export const collections = {
    home: homeCollection,
    customer: customerCollection,
};