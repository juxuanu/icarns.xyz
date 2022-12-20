import React from "react";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import PostMetadata from "../../../utils/interfaces/post-metadata";
import { getPostsAndMetadata } from "../../../utils/functions/get-posts-and-metadata";
import { getPostMetadata } from "../../../utils/functions/get-post-metadata";

interface Props {
  content: string;
  metadata: PostMetadata;
}

export default function PostPage(props: Props) {
  const matterResult = matter(props.content);
  return (
    <>
      <Head>
        <title>Nin del Sol: {matterResult.data.title ?? "[Sense títol]"}</title>
      </Head>
      <h1 className="mx-auto text-3xl">
        {matterResult.data.title ?? "[Sense títol]"}
      </h1>
      <p className="font-mono text-xs">{matterResult.data.date ?? ""}</p>
      <Markdown
        className="
        [&>h2]:text-2xl [&>h2]:underline
        [&>h3]:text-xl [&>h3]:underline
        [&>h4]:text-lg [&>h4]:underline
        [&>h5]:underline [&>h5]:font-bold
      "
      >
        {matterResult.content}
      </Markdown>
    </>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      content: fs.readFileSync(
        `posts/${context.params!.slug as string}.md`,
        "utf-8"
      ),
      metadata: getPostMetadata(context.params!.slug as string),
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: fs
      .readdirSync("posts/")
      .flatMap((file) => file.replace(".md", ""))
      .map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
