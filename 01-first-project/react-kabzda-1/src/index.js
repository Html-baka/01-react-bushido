import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainApp from "./App";
import store from "./redux/redux-store";

  ReactDOM.render(
      <MainApp />,
      document.getElementById("root")
  );

window.store = store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
