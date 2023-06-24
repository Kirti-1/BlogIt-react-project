// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLHk61s8WmgZIDe9OCRoS42mEDsORpNE",
  authDomain: "react-blog-project-2f0fb.firebaseapp.com",
  projectId: "react-blog-project-2f0fb",
  storageBucket: "react-blog-project-2f0fb.appspot.com",
  messagingSenderId: "442603764514",
  appId: "1:442603764514:web:c3c56a8e66a3df74aa837b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Firestore = firebase.firestore();