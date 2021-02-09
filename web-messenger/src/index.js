import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSM1aQClZVURdFcvzhWsV2IZM7Zk_Xz7g",
  authDomain: "web-messenger-e67d5.firebaseapp.com",
  projectId: "web-messenger-e67d5",
  storageBucket: "web-messenger-e67d5.appspot.com",
  messagingSenderId: "659756351851",
  appId: "1:659756351851:web:336b3732cddebdbd2d4c2e",
  measurementId: "G-TW211TJZED"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
