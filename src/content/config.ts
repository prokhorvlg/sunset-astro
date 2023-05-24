import { PostType } from '@/components/posts/PostGrid.component';
import { defineCollection, z } from 'astro:content';

const collectionSetup = {
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		mainText: z.string().optional(),
		subText: z.string().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		thumbImage: z.string().optional(),
		thumbAlignment: z.string().optional(),
		draft: z.boolean().optional(),
		hidden: z.boolean().optional(),
		noTableOfContents: z.boolean().optional(),
		tags: z.array(z.string()).optional()
	}),
}

export const collections = {
	[PostType.Lore]: defineCollection(collectionSetup),
	[PostType.Introduction]: defineCollection(collectionSetup),
	[PostType.Game]: defineCollection(collectionSetup),
	[PostType.Announcement]: defineCollection(collectionSetup),
};