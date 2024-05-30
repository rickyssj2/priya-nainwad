import App from "./App";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_ACCESS_TOKEN } =
  process.env;

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </ThemeProvider>
);
