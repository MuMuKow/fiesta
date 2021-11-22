import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import {getFirestore} from '@firebase/firestore' 

// setting up connection to firebase 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fiesta-5caa1.firebaseapp.com",
  projectId: "fiesta-5caa1",
  storageBucket: "fiesta-5caa1.appspot.com",
  messagingSenderId: "973278845752",
  appId: "1:973278845752:web:be6bb9ab244cc4aee53fcd",
  measurementId: "G-ML07VRLW7T"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export function signup(email, password, username) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}