import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl72i83u42t3m01uh6joo47ze/master",
  cache: new InMemoryCache(),
});
