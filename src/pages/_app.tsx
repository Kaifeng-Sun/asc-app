import React from "react";
import { AppProps } from "next/app";
import { Chakra } from "../styles/Chakra";
import Layout from "../layouts";

export default function CharityApp({ Component, pageProps }: AppProps) {
  return (
      <Chakra>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
  );
}