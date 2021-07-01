import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CustomThemeProvider from "./store/theme";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>,
  document.getElementById("root")
);
