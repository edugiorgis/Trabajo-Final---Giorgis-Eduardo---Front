import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>
);
