// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9X2lL3MbQm2nxHD6py8_gGxwupVjjJg",
  authDomain: "social-media-project-7b12d.firebaseapp.com",
  projectId: "social-media-project-7b12d",
  storageBucket: "social-media-project-7b12d.appspot.com",
  messagingSenderId: "832797181695",
  appId: "1:832797181695:web:55808ef64f26eaaf81eeca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);