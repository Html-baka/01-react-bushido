import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";

let posts = [
  { id: 1, message: "Hey, how are you?", likeCounts: 15 },
  { id: 2, message: "My first post", likeCounts: 3 }
];
let postsElements = posts.map( p => <Post likeCounts={p.likeCounts} message={p.message} />);

ReactDOM.render(
  <React.StrictMode>
    <App postsElements = {postsElements}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
