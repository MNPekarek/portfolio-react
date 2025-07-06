
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8g5snRKxAWtMRrFApOwiG4Uyoe9Fj5cA",
  authDomain: "my-portfolio-191a2.firebaseapp.com",
  projectId: "my-portfolio-191a2",
  storageBucket: "my-portfolio-191a2.firebasestorage.app",
  messagingSenderId: "247334051929",
  appId: "1:247334051929:web:25b3067f5d67470cb2d148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);