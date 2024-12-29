// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjXLGZOmQSES-L3nUX_4gSLjpcc1yT_HY",
    authDomain: "play-station-store-0725.firebaseapp.com",
    projectId: "play-station-store-0725",
    storageBucket: "play-station-store-0725.firebasestorage.app",
    messagingSenderId: "190561853144",
    appId: "1:190561853144:web:a0b703273ed6c5726a81ad",
    measurementId: "G-JZ681CK64P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User registered successfully 
            const user = userCredential.user;
            console.log("User registered:", user);
            return user;
        })
        .catch((error) => { // Handle errors here 
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error registering user:", errorCode, errorMessage);
            throw error;
        });


};

export { db, auth, registerUser, signInWithEmailAndPassword };
