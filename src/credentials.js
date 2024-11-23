// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHfLGyxeTdFb15oRVEkBlVxl-YPC_PHX8",
  authDomain: "crud-electiva-84cdb.firebaseapp.com",
  projectId: "crud-electiva-84cdb",
  storageBucket: "crud-electiva-84cdb.firebasestorage.app",
  messagingSenderId: "656165626148",
  appId: "1:656165626148:web:a72aa8d4ebe4e701f593b1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase