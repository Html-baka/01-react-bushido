import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: "Hey, how are you?", likeCounts: 15 },
  { id: 2, message: "My first post", likeCounts: 3 }
];
let dialogs = [
  { id: 1, name: "Hohlojin" },
  { id: 2, name: "Ded Klop" },
  { id: 3, name: "Petuh" },
  { id: 4, name: "Klop 1" },
  { id: 5, name: "Klop 2" },
];
let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How is your react?" },
  { id: 3, message: "heeeey?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
