import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBrDjfTd93NXR3yZ3alyE6bKtLso8kNfGw",
  authDomain: "jisoochat.firebaseapp.com",
  projectId: "jisoochat",
  storageBucket: "jisoochat.appspot.com",
  messagingSenderId: "515216029328",
  appId: "1:515216029328:web:556bb32e9a0c58ffba8a15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
