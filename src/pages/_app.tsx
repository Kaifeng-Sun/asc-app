import React from "react";
import { AppProps } from "next/app";
import { Chakra } from "../styles/Chakra";
import Layout from "../layouts";
import AuthProvider from "../components/AuthProvider";

export default function CharityApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Chakra>
      {/* <AuthProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </AuthProvider> */}
    </Chakra>
  );
}
