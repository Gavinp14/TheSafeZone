// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZEpuFF7Yo7XgYLv9kAgJmnxFjxN7ssg0",
  authDomain: "thesafezone-e5cfb.firebaseapp.com",
  projectId: "thesafezone-e5cfb",
  storageBucket: "thesafezone-e5cfb.appspot.com",
  messagingSenderId: "273833202230",
  appId: "1:273833202230:web:375cba0805ba18d7277e97",
  measurementId: "G-2DW8R8YH4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, getDoc, doc };
