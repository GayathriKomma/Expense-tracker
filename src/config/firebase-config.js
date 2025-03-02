import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeds1rOEzKQwVFie_6zYwsP1XmQMwih-4",
  authDomain: "expense-tracker-22b68.firebaseapp.com",
  projectId: "expense-tracker-22b68",
  storageBucket: "expense-tracker-22b68.appspot.com",
  messagingSenderId: "436996232229",
  appId: "1:436996232229:web:79a936a3056d83adf75bcc",
  measurementId: "G-YJKGV5EGP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Auth
export const provider = new GoogleAuthProvider(); // Google Auth Provider
export const db = getFirestore(app); // Firestore Database
