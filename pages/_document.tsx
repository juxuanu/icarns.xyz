import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        </Head>
        <body
          className="dark:bg-gray-700 dark:text-gray-100 bg-neutral-300 text-black
                    transition-all scroll-smooth
                    mx-auto max-w-[1200px]
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
