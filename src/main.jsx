import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Wrap App in BrowserRouter with basename for GitHub Pages
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/craftcode-studio-neonblue/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
