import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {AuthUserProvider} from "../src/firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthUserProvider>
    <App />
  </AuthUserProvider>
);
