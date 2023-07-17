import React from "react";
import { AppProps } from "next/app";
import { Chakra } from "../styles/Chakra";
import Layout from "../layouts";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/apollo";

export default function CharityApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Chakra>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </ApolloProvider>
  );
}
