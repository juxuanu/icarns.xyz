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
import { getPostMetadata, PostMetadata } from "../../../utils";

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
      <div className="[&>*]:mx-auto">
        <h1 className="text-center text-3xl">
          {matterResult.data.title ?? "[Sense títol]"}
        </h1>
        <p className="font-mono text-xs text-center mt-5 mb-10">
          {matterResult.data.date ?? ""}
        </p>
        <Markdown className="prose prose-neutral">
          {matterResult.content}
        </Markdown>
      </div>
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
