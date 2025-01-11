import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG);

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
