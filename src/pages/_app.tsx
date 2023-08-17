import React from "react";
import { AppProps } from "next/app";
import { Chakra } from "../styles/Chakra";
import Layout from "../layouts";
import { SessionProvider } from "next-auth/react";

export default function CharityApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Chakra>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Chakra>
  );
}
