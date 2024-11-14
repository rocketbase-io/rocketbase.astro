import {z} from "astro:content";

export const defaultQuery : any = {
    deep: {
        translations: {
            _filter: {
                _and: [
                    {
                        languages_code: { _eq: "de" },
                    },
                ],
            },
        },
    },
    fields: ["*.*", { translations: ["*"] }],
};

const directusFile = z.object({
    id: z.string(),
    storage: z.string(),
    filename_disk: z.string().nullable(),
    filename_download: z.string(),
    title: z.string().nullable(),
    type: z.string().nullable(),
    filesize: z.string().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    description: z.string().nullable(),
    location: z.string().nullable(),
    tags: z.array(z.string()).nullable(),
    metadata: z.record(z.any()).nullable(),
    focal_point_x: z.number().nullable(),
    focal_point_y: z.number().nullable(),
    uploaded_on: z.literal("datetime"),
    modified_on: z.literal("datetime"),
    charset: z.string().nullable(),
});

export const directusFileSchema = directusFile.pick({
    id: true,
    filename_disk: true,
    title: true,
    description: true,
    width: true,
    height: true,
}).partial();