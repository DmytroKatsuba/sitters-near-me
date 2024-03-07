import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Platform } from "react-native";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `https://app.wyndy.com/public/graphql`, fetch }),
  headers: {
    "user-agent": Platform.OS,
  },
});

export const baseQuery = (query: DocumentNode, variables?: any) => {
  return client
    .query({
      query,
      variables,
      fetchPolicy: "no-cache",
    })
    .then((e) => {
      return e;
    });
};
