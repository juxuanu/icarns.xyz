import React from "react";
import Link from "next/link";
import PostMetadata from "../utils/interfaces/post-metadata";

export interface Props {
  postsAndMetadata: PostMetadata[];
}

export default function PostsList(props: Props) {
  return (
    <ul className="list-none flex flex-wrap justify-center sm:justify-evenly gap-6 mt-5 rounded mx-auto">
      {props.postsAndMetadata.map((post) => (
        <li
          className="border border-slate-200 p-4 rounded-md shadow-md cursor-pointer
          transition-all hover:bg-slate-200"
          key={post.slug}
        >
          <Link className="" href={`/posts/${post.slug}`}>
            <div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm">{post.subtitle}</p>
              <p className="text-xs font-light">{post.dateString}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
