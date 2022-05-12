import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./pages/Home";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
export default App;
