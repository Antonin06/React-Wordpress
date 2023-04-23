import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
    watchQuery: {
        // fetchPolicy: 'no-cache',
        // errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        // errorPolicy: 'all',
    },
}

const client = new ApolloClient({
    uri: `http://localhost/wordpress-headless/graphql`,
    cache: new InMemoryCache(),
    fetchPolicy: 'network-only',
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only'
        }
    },
});
export default client;