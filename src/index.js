import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FeedBackProvider from "./context/FeedBackContext";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

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
