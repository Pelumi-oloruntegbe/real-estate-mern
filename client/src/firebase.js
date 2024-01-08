// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-b0608.firebaseapp.com",
  projectId: "real-estate-mern-b0608",
  storageBucket: "real-estate-mern-b0608.appspot.com",
  messagingSenderId: "914879369052",
  appId: "1:914879369052:web:3df2ffeb4191984e15bb99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);