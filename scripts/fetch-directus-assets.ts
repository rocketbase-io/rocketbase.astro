import 'dotenv/config' // ← Wichtig: lädt automatisch .env beim Import

import {createDirectus, readFiles, rest, staticToken} from '@directus/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fetch } from 'undici';
import { extension } from 'mime-types';
import type {CustomDirectusTypes} from "@lib/directus-types";

export const directus = createDirectus<CustomDirectusTypes>(process.env.DIRECTUS_URL!)
    .with(staticToken(process.env.DIRECTUS_API_KEY!))
    .with(rest());

const assets = await  directus.request(
    readFiles({
        limit: -1,
        fields: ['id', 'type', 'filename_disk', 'description']
    }));

console.log(`found ${assets.length} assets to download`);

assets.forEach(async (asset) => {
    const filename = `${asset.id}.${extension(asset.type??'image/jpg')}`;
    const publicCacheDir = path.resolve('./public/_remote-cache');
    await fs.mkdir(publicCacheDir, { recursive: true });
    const filepath = path.join(publicCacheDir, filename);
    const url = `${directus.url}assets/${asset.id}`

    try {
        await fs.access(filepath);
        console.log(`downloaded ${filename} in cache`);
    } catch {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`RemoteImage: Failed to download image: ${res.status} ${res.statusText}`);
        }
        const arrayBuffer = await res.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        await fs.writeFile(filepath, uint8Array);
    }
})
