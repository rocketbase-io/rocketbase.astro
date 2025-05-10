import {createDirectus, rest, staticToken} from "@directus/sdk";
import type {CustomDirectusTypes} from "./directus-types";

export const directus = createDirectus<CustomDirectusTypes>(import.meta.env.DIRECTUS_URL)
    .with(staticToken(import.meta.env.DIRECTUS_API_KEY))
    .with(rest());