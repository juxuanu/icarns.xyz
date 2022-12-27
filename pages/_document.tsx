import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-neutral-100 text-gray-900 transition-all scroll-smooth">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
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
