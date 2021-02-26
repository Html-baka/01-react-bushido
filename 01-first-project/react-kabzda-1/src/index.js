import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, sendMessage, updateNewPostText, updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} updateNewMessageText = {updateNewMessageText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
