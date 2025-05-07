// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKT569tYR5E38kmsc5gEZsFlsr7n8qNQ",
  authDomain: "palacios-1c08e.firebaseapp.com",
  projectId: "palacios-1c08e",
  storageBucket: "palacios-1c08e.firebasestorage.app",
  messagingSenderId: "388949765731",
  appId: "1:388949765731:web:a7f39c7e20162e52f79256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);