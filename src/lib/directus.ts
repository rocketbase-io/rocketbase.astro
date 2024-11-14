import {createDirectus, rest, staticToken} from "@directus/sdk";
import type {CustomDirectusTypes} from "./directus-types";
import {DIRECTUS_URL, DIRECTUS_API_KEY} from "astro:env/server";

export const directus = createDirectus<CustomDirectusTypes>(DIRECTUS_URL)
    .with(staticToken(DIRECTUS_API_KEY))
    .with(rest());

export const buildImageUrl = (asset: { id?: string }) => {
    return directus.url + "assets/" + asset.id;
}