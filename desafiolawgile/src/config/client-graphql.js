import {ApolloClient, InMemoryCache} from "@apollo/client";




  export const client = new ApolloClient({
    uri: 'https://qb2qzyezmbgohcziiaiau3wgpy.appsync-api.sa-east-1.amazonaws.com/graphql',
    cache: new InMemoryCache()
  });
  


