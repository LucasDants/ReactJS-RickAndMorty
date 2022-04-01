import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false
          },
          episodes: {
            keyArgs: false
          },
          merge(existing = [], incoming: any) {
            return [...existing, ...incoming];
          },
        }
      }
    }
  })
});