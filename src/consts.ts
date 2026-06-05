// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Chenghui\'s Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),

		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };