import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { initializeApp } from "firebase/app";
import  firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDRXoZtEH99s8VKAesk84_O1QnhSLr3tP8",
  authDomain: "cart-c6fc7.firebaseapp.com",
  projectId: "cart-c6fc7",
  storageBucket: "cart-c6fc7.appspot.com",
  messagingSenderId: "592454579128",
  appId: "1:592454579128:web:38bac67fbba6c73d75954d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//ReactDOM.render(<App/>,document.getElementById("root"));