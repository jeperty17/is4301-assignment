import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Same Firebase project as Tutorial 6
const firebaseConfig = {
  apiKey: "AIzaSyDMyukdq3n8a8BpsUPWJdWUi1KjZ8960Rw",
  authDomain: "is4301-af031.firebaseapp.com",
  projectId: "is4301-af031",
  storageBucket: "is4301-af031.firebasestorage.app",
  messagingSenderId: "260596473693",
  appId: "1:260596473693:web:13b998fb03628e580bd2b4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
