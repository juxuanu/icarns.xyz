import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Footer, Header } from "../components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        className="bg-neutral-100 text-gray-900 transition-all scroll-smooth"
        lang="ca"
      >
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="description"
            content="Receptes curtes per sobreviure en dies feiners -- també em serveix per practicar NextJS ;-)"
          />
        </Head>
        <body
          className="mx-auto max-w-[1200px]
                    [&>*]:mx-10"
        >
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
