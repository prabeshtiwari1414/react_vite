// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrLB1e9YWxZo5-1HyA9YXWGAi77Oy8-zw",
  authDomain: "e-commerce-3cb63.firebaseapp.com",
  projectId: "e-commerce-3cb63",
  storageBucket: "e-commerce-3cb63.firebasestorage.app",
  messagingSenderId: "691391178427",
  appId: "1:691391178427:web:9e3a822eb767f67d7f6b9e",
  measurementId: "G-JT99VQ8L15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
