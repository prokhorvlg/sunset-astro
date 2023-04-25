import { PostType, ProcessedPost } from "@/components/posts/PostGrid.component";
import { Images } from "@/utils/sharedImages";
import { getImage } from "@astrojs/image";
import { getCollection } from "astro:content";

// loadAnyPost
export const loadAnyPost = async () => {
    const posts = await getCollection('lore');
    const introductionPosts = await getCollection('introduction');
    const combinedPosts = [...posts, ...introductionPosts]

	return combinedPosts.map((post) => ({
		params: { slug: post.slug },
		props: post,
	}));
}

// getAllPosts: Returns a collection of all posts on the website.
export const getAllPosts = async () => {
  // Load in every post type (must be done using the Astro way).
  // LORE
  const lorePosts = await getCollection(PostType.Lore, ({ data }) => {
    return data.draft !== true;
  });
  const lorePostsProcessed = await processPosts(lorePosts);

  // INTRODUCTION
  const introductionPosts = await getCollection(
    PostType.Introduction,
    ({ data }) => {
      return data.draft !== true;
    }
  );
  const introductionPostsProcessed = await processPosts(introductionPosts);

  // Combine all of the above.
  const processedPosts: ProcessedPost[] = [
    ...lorePostsProcessed,
    ...introductionPostsProcessed,
  ];

  // Sort collection by date.
  const sortedPosts = processedPosts.sort((a, b) => {
    return b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf();
  });

  return sortedPosts;
};

// Takes incoming posts, compiles thumb image and search data
export const processPosts = async (posts) => {
  return await Promise.all(
    posts.map(async (post) => {
      // Find and process the thumb image if available.
      const imageObject = Images.find(
        (imageItem) => imageItem.id === post.data.thumbImage
      );
      console.log(imageObject);
      let processedImageObject;
      if (imageObject) {
        processedImageObject = await getImage({
          src: imageObject.src,
          alt: imageObject.alt || "",
          aspectRatio: `${imageObject.width}:${imageObject.height}`,
          width: 600,
          format: "webp",
        });
      }

      // Compile the processed post object
      return {
        post: post,
        processedThumbImage: processedImageObject ? processedImageObject : null,
        searchData: `
				${post.data.title.toLowerCase()} 
				${post.data.mainText?.toLowerCase()} 
				${post.data.subText?.toLowerCase()} 
				${post.data.tags?.map((tag) => tag.toLowerCase() + " ")} 
				${post.body.toLowerCase()}`,
      } as ProcessedPost;
    })
  );
};