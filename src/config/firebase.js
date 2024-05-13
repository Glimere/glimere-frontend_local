// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYOWZYmTLazfaLd4dOInCNwJAUf2_gRPM",
  authDomain: "glimere-d0dd3.firebaseapp.com",
  projectId: "glimere-d0dd3",
  storageBucket: "glimere-d0dd3.appspot.com",
  messagingSenderId: "837893581028",
  appId: "1:837893581028:web:021fcaec887806516e24f1",
  measurementId: "G-VG02NLV1YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);