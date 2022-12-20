import PostMetadata from "../interfaces/post-metadata";
import fs from "fs";
import matter from "gray-matter";

export function getPostMetadata(postSlug: string): PostMetadata {
  const matterResult = matter(fs.readFileSync(`posts/${postSlug}.md`));

  return {
    slug: postSlug,
    title: matterResult.data.title ?? "[Sense títol]",
    dateString: matterResult.data.date ?? "[Sense data]",
    description: matterResult.data.description ?? null,
    subtitle: matterResult.data.subtitle ?? null,
  };
}
