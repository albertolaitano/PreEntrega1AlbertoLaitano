import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABxevHdVwekF0lX2XGQzxEno3dkw6UR5U",
  authDomain: "proyectoreactalbertolaitanoch.firebaseapp.com",
  projectId: "proyectoreactalbertolaitanoch",
  storageBucket: "proyectoreactalbertolaitanoch.appspot.com",
  messagingSenderId: "340357950155",
  appId: "1:340357950155:web:088aa0f5fce037d2b4494e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
