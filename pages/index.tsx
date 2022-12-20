import PostsList, { Props } from "../components/posts-list";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { getPostsAndMetadata } from "../utils/functions/get-posts-and-metadata";

export default function HomePage(props: Props) {
  return (
    <>
      <Head>
        <title>Nin del Sol</title>
      </Head>
      <PostsList postsAndMetadata={props.postsAndMetadata} />
    </>
  );
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: { postsAndMetadata: getPostsAndMetadata() } };
}
