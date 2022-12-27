import PostMetadata from "../interfaces/post-metadata";
import fs from "fs";
import matter from "gray-matter";

export function getPostsAndMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

  return files.map((f) => {
    const matterResult = matter(fs.readFileSync(folder + f));

    return {
      slug: f.replace(".md", ""),
      title: matterResult.data.title ?? "[Sense títol]",
      dateString: matterResult.data.date ?? "[Sense data]",
    };
  });
}
