export const findAdjacentProcessedPosts = (
  arr,
  targetId: number
) => {
  const targetIndex = arr.findIndex((obj) => obj.post.data.title === targetId);

  if (targetIndex === -1) {
    return { previousPost: null, nextPost: null }; // target object with given id not found in array
  }

  const nextPost = targetIndex > 0 ? arr[targetIndex - 1] : null;
  const previousPost = targetIndex < arr.length - 1 ? arr[targetIndex + 1] : null;

  return { previousPost, nextPost };
}

export const getFilenameWithoutExtension = (path: string): string => {
    const lastIndex = path.lastIndexOf('/');
    const filenameWithExtension = lastIndex !== -1 ? path.substring(lastIndex + 1) : path;
    const dotIndex = filenameWithExtension.lastIndexOf('.');
    return dotIndex !== -1 ? filenameWithExtension.substring(0, dotIndex) : filenameWithExtension;
  }