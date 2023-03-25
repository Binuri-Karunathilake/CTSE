// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBY4yJacphgvU7V4rWAlP1AbWPK_0FVbM",
  authDomain: "reactapp-cea8f.firebaseapp.com",
  projectId: "reactapp-cea8f",
  storageBucket: "reactapp-cea8f.appspot.com",
  messagingSenderId: "872145242935",
  appId: "1:872145242935:web:d68bf7eb22da348f7828b2"
  // measurementId: "G-YXCYVQR03F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const fireStoreDB = getFirestore(app);

export {auth, fireStoreDB};