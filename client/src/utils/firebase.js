// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-e1d26.firebaseapp.com",
  projectId: "taskmanager-e1d26",
  storageBucket: "taskmanager-e1d26.appspot.com",
  messagingSenderId: "463060656265",
  appId: "1:463060656265:web:df796427ab24e4da206658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);