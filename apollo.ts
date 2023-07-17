import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://13.236.137.51/graphql',
    cache: new InMemoryCache(),
  });