import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// setting up connection to firebase 
const firebaseConfig = {
    apiKey: {key:process.env.REACT_APP_FIREBASE_API_KEY},
    authDomain: "fiesta-f21-project.firebaseapp.com",
    projectId: "fiesta-f21-project",
    storageBucket: "fiesta-f21-project.appspot.com",
    messagingSenderId: "841381762835",
    appId: "1:841381762835:web:fbbb5a9dff7ce342d16ce6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
}
