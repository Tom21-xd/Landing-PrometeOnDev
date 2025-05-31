import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    shortDescription: z.string(),
    tools: z.string(),
    author: z.string(),
    link: z.string().optional(),
    socials: z
      .array(
        z.object({
          icon: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    gallery: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
