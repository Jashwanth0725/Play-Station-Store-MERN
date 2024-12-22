// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLwvhOZMIJYfPqo1W7VquWgdNrTQAXbr8",
    authDomain: "play-station-store-e6933.firebaseapp.com",
    projectId: "play-station-store-e6933",
    storageBucket: "play-station-store-e6933.firebasestorage.app",
    messagingSenderId: "394555522070",
    appId: "1:394555522070:web:0db9216aed401a78b7c937",
    measurementId: "G-R83W8ELHNX"
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
