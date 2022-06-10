import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="mobile-nav" />
        <div id="modal" />
        <div id="toast" />
        <div id="loader" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;