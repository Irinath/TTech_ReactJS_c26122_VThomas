// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALkxli1kOqt7h_CBVfJEMmKC0Mp7Sjni0",
  authDomain: "ttc26122-react-vthomas.firebaseapp.com",
  projectId: "ttc26122-react-vthomas",
  storageBucket: "ttc26122-react-vthomas.firebasestorage.app",
  messagingSenderId: "200028497110",
  appId: "1:200028497110:web:7c1c8a4d6ec43064845577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);

//para login
const auth = getAuth(app);
export {db, auth};