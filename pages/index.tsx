import { PostsList, PostsListProps as Props } from "../components";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { getPostsAndMetadata } from "../utils";

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
