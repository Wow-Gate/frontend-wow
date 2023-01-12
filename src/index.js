import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme} color="textPrimary">
    <React.StrictMode>
      <React.Suspense fallback={<>...</>}>
        <CssBaseline />
        <App>
          <RouterProvider router={router} />
        </App>
      </React.Suspense>
    </React.StrictMode>
  </ThemeProvider>,
  document.querySelector("#root")
);
