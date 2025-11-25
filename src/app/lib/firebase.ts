// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6gR1yO6jQkvVLsaXu6kHws3FdbBzQuf4",
  authDomain: "chen-and-yossi-co.firebaseapp.com",
  projectId: "chen-and-yossi-co",
  storageBucket: "chen-and-yossi-co.firebasestorage.app",
  messagingSenderId: "346874742738",
  appId: "1:346874742738:web:8333801914502bc60baa0b",
  measurementId: "G-K00YR9HG50"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
