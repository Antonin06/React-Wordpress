import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: `http://localhost/wordpress-headless/graphql`,
    cache: new InMemoryCache(),
});
export default client;