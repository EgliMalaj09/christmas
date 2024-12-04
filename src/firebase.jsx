// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7WcpEvg9qNQ146Ht6NYx_5lJeaxE1H-E",
    authDomain: "christmas-f0944.firebaseapp.com",
    projectId: "christmas-f0944",
    storageBucket: "christmas-f0944.firebasestorage.app",
    messagingSenderId: "194036205834",
    appId: "1:194036205834:web:4f4f7fc538f90e240652f3",
    measurementId: "G-XZ4YPDRL8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//SET UP DB
export const db = getFirestore(app)

//COLLECTION REF
export const toysCollectionRef = collection(db, 'toys');

export const messageCollectionRef = collection(db, 'messages')