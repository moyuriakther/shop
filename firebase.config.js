// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1w1SSDwXoT3tMkY3ELPzV8O80olVe-E",
  authDomain: "vite-react-shop.firebaseapp.com",
  projectId: "vite-react-shop",
  storageBucket: "vite-react-shop.appspot.com",
  messagingSenderId: "603717151210",
  appId: "1:603717151210:web:927a1b26a16ed803ecea93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
