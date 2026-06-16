import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="903718976224-7jsejcme93jrk9o9ndm3g4df9pogbtuj.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
);
