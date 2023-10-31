// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChaCYv___U0_RJFXKq4QMc3bOrgQctxHs",
  authDomain: "e-commerce-5ddda.firebaseapp.com",
  projectId: "e-commerce-5ddda",
  storageBucket: "e-commerce-5ddda.appspot.com",
  messagingSenderId: "660991314418",
  appId: "1:660991314418:web:e855b43d628ae81f36436b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
