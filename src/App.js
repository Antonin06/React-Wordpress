import React from "react";
import { Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./config/graphql/apollo";
export default function App() {
  return (
      <ApolloProvider client={client}>
        <Switch>
          {/*<Route exact path="/" component={HomePage} />*/}
          {/*<Route path="/blog/:slug" component={PostPage} />*/}
        </Switch>
      </ApolloProvider>
  );
}