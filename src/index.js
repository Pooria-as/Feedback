import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import FeedBackProvider from "./context/FeedBackContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FeedBackProvider>
        <App />
      </FeedBackProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
