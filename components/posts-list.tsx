import React from "react";
import Link from "next/link";
import { PostMetadata } from "../utils";

export interface Props {
  postsAndMetadata: PostMetadata[];
}

export default function PostsList(props: Props) {
  return (
    <div className="flex flex-wrap justify-center sm:justify-evenly gap-6 mt-5 rounded mx-auto">
      {props.postsAndMetadata.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <div className="hover:bg-neutral-200 border border-neutral-200 p-4 rounded-md shadow-md transition-all">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm">{post.subtitle}</p>
            <p className="text-xs font-slab font-light">{post.dateString}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
