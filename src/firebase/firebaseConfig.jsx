import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGf9ZBHGSDXRIMhRiolttt-E9Q1qHmLak",
  authDomain: "my-splash-pro.firebaseapp.com",
  projectId: "my-splash-pro",
  storageBucket: "my-splash-pro.appspot.com",
  messagingSenderId: "709257168723",
  appId: "1:709257168723:web:5092b4ca39459e9453c3a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
export const auth = getAuth();

// db
export const db = getFirestore(app);
