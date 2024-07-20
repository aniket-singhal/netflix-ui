// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOfisvBTLspqiYSVIR23Eh00gtTOP22c",
  authDomain: "react-netflix-clone-3e3d0.firebaseapp.com",
  projectId: "react-netflix-clone-3e3d0",
  storageBucket: "react-netflix-clone-3e3d0.appspot.com",
  messagingSenderId: "119715969226",
  appId: "1:119715969226:web:4fc8a735996139453a9c33",
  measurementId: "G-WRVPPVENJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
// const analytics = getAnalytics(app);