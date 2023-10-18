// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvintF4110V6qoOLKoFdH_21NlBY7cpEE",
  authDomain: "legalcompass-4e217.firebaseapp.com",
  projectId: "legalcompass-4e217",
  storageBucket: "legalcompass-4e217.appspot.com",
  messagingSenderId: "49074673464",
  appId: "1:49074673464:web:cabb374b917541ee0753cd",
  measurementId: "G-5JR6R4KF1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()

export {auth, app}