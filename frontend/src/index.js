import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { pageReducer } from "./reducers";

const store = configureStore({
  reducer: {
    page: pageReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);