import { PostType, ProcessedPost } from "@/components/posts/PostGrid.component";
import { Images } from "@/utils/sharedImages";
import { getImage } from "@astrojs/image";
import { getCollection, getEntryBySlug } from "astro:content";

export const loadAnyPost = async () => {
  const posts = await getCollection("lore");
  const introductionPosts = await getCollection("introduction");
  const combinedPosts = [...posts, ...introductionPosts];

  return combinedPosts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
};

// Get a specific post by id and collection.
export const getPost = async (id: string, collection: string) => {
  const post = await getEntryBySlug(collection as any, id);
  return post;
};
export const getProcessedPost = async (
  id: string,
  collection: string
): Promise<ProcessedPost> => {
  const post = await getPost(id, collection);
  return await processPost(post);
};

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
  const sortedPosts = sortProcessedPostsByPubDate(processedPosts)

  return sortedPosts;
};

// This is for posts processed from getCollection.
export const sortProcessedPostsByPubDate = (processedPosts) => {
  return processedPosts.sort((a, b) => {
    return b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf();
  });
}
// This is for globbed posts.
export const sortPostsByPubDate = (posts) => {
  return posts.sort((a, b) => (new Date(a.frontmatter.pubDate) as any) - (new Date(b.frontmatter.pubDate) as any));
  /*return posts.sort((a, b) => {
    return b.frontmatter.pubDate.valueOf() - a.frontmatter.pubDate.valueOf();
  });*/
}

// Takes incoming posts, compiles thumb image and search data
export const processPosts = async (posts) => {
  return await Promise.all(
    posts.map(async (post) => {
      return await processPost(post);
    })
  );
};

export const processPost = async (post) => {
  // Find and process the thumb image if available.
  const imageObject = Images.find(
    (imageItem) => imageItem.id === post.data.thumbImage
  );
  let processedImageObject;
  if (imageObject) {
    processedImageObject = await getImage({
      src: imageObject.src,
      alt: imageObject.alt || "",
      aspectRatio: `${imageObject.width}:${imageObject.height}`,
      width: 1000,
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
};

// Get a processed, minified image by id.
export const getProcessedImageById = async (imageId: string, width?: number, format?: string) => {
  // Find the image.
  const imageObject = Images.find((imageItem) => imageItem.id === imageId);
  if (!imageObject) return null
  // Return a processed version.
  return await getImage({
    src: imageObject.src,
    alt: imageObject.alt || "",
    aspectRatio: `${imageObject.width}:${imageObject.height}`,
    width: width || 1000,
    format: format as any || "webp",
  });
};

export const getImageObjectById = (imageId: string) => {
  return Images.find((imageItem) => imageItem.id === imageId);
}

export const getNearestPosts = () => {
  
}