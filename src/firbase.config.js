// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY60nduy7OXRTMLxjky7obsejiOrqbF2E",
  authDomain: "login-f0f4d.firebaseapp.com",
  projectId: "login-f0f4d",
  storageBucket: "login-f0f4d.appspot.com",
  messagingSenderId: "21650118410",
  appId: "1:21650118410:web:4dcacd2397198e94d8ccf3",
  measurementId: "G-7203HQV3H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore()
export const auth =getAuth(app);