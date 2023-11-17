import { type ProcessedPost, PostType } from "@/components/posts/PostsGrid.component";
import { Images } from "@/data/sharedImages";
import { getImage } from "astro:assets";
import { getCollection, getEntryBySlug } from "astro:content";

export const loadAnyPost = async () => {
  const posts = await getCollection("lore");
  const introductionPosts = await getCollection("introduction");
  const announcementPosts = await getCollection("announcement");
  const secretPosts = await getCollection("secret");
  const databasePosts = await getCollection("database");
  const combinedPosts = [
    ...posts, 
    ...introductionPosts, 
    ...announcementPosts, 
    ...secretPosts, 
    ...databasePosts
  ];

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

const getCollectionWrapper = async (postType: PostType) => {
  return await getCollection(postType, ({ data }) => {
    return data.draft !== true && data.hidden !== true;
  })
}
const getProcessedCollection = async (postType: PostType) => {
  const posts = await getCollectionWrapper(postType)
  const postsProcessed = await processPosts(posts);
  return postsProcessed
}
const getUnprocessedCollection = async (postType: PostType) => {
  return await getCollectionWrapper(postType)
}

// PROCESSED
export const getAllPosts = async () => {
  const lorePosts = await getProcessedCollection(PostType.Lore)
  const introductionPosts = await getProcessedCollection(PostType.Introduction)
  const announcementPosts = await getProcessedCollection(PostType.Announcement)
  const databasePosts = await getProcessedCollection(PostType.Database)
  const processedPosts: ProcessedPost[] = [
    ...lorePosts,
    ...introductionPosts,
    ...announcementPosts,
    ...databasePosts
  ];

  // Sort collection by date.
  const sortedPosts = sortProcessedPostsByPubDate(processedPosts)

  return sortedPosts;
};

// UNPROCESSED
export const getAllCollections = async () => {
   const lorePosts = await getUnprocessedCollection(PostType.Lore)
   const introductionPosts = await getUnprocessedCollection(PostType.Introduction)
   const announcementPosts = await getUnprocessedCollection(PostType.Announcement)
   const databasePosts = await getUnprocessedCollection(PostType.Database)
  const allPosts = [
    ...lorePosts,
    ...introductionPosts,
    ...announcementPosts,
    ...databasePosts
  ];

  return allPosts;
}

export const getAllSecretPosts = async () => {
  const secretPosts = await getCollection(PostType.Secret, ({ data }) => {
    return data.draft !== true && data.hidden !== true;
  });
  const secretPostsProcessed = await processPosts(secretPosts);
  // Combine all of the above.
  const processedPosts: ProcessedPost[] = [
    ...secretPostsProcessed,
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
  let imageObject
  if (post.data.thumbImage) {
    // Find and process the thumb image if available.
    imageObject = Images.find(
      (imageItem) => imageItem.id === post.data.thumbImage
    );
  }
  let processedImageObject;
  let minifiedImageObject;
  if (imageObject) {
    const importedImage = await imageObject.src()
    const importedImageInner = importedImage.default

    processedImageObject = await getImage({
      src: importedImageInner,
      alt: imageObject.alt || "",
      width: 1000,
      format: "webp"
    });
    minifiedImageObject = await getImage({
      src: importedImageInner,
      alt: imageObject.alt || "",
      width: 50,
      format: "webp"
    });
  }

  // Compile the processed post object
  return {
    post: post,
    processedThumbImage: processedImageObject ? processedImageObject : null,
    minifiedImageObject: minifiedImageObject ? minifiedImageObject : null,
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

  const importedImage = await imageObject.src()
  const importedImageInner = importedImage.default
  // Return a processed version.
  return await getImage({
    src: importedImageInner,
    alt: imageObject.alt || "",
    format: "webp",
    width: width
  });
};

export const getImageObjectById = (imageId: string) => {
  return Images.find((imageItem) => imageItem.id === imageId);
}