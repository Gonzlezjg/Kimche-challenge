import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme/theme.json";
import Loading from "./components/loading/Loading";
import GlobalState from "./context/GlobalState";
import "./styles/index.css";

const App = lazy(() => import("./App"));

const theme = createTheme(customTheme);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <GlobalState>
          <App />
        </GlobalState>
      </Suspense>
    </ThemeProvider>
  </ApolloProvider>
);
