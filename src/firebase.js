import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import {getFirestore} from '@firebase/firestore' 

require('dotenv').config()
// setting up connection to firebase 
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_API_KEY,
  authDomain: "fiesta-5caa1.firebaseapp.com",
  projectId: "fiesta-5caa1",
  storageBucket: "fiesta-5caa1.appspot.com",
  messagingSenderId: "973278845752",
  appId: "1:973278845752:web:be6bb9ab244cc4aee53fcd",
  measurementId: "G-ML07VRLW7T"
};
console.log(process.env.FIRE_BASE_API_KEY)

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = getAuth();

export function signup(email, password) {
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