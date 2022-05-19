// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz8tJx1ZTVSBYiqPe5r8ZL-HaEL4ETokM",
  authDomain: "makeup-portfolio.firebaseapp.com",
  databaseURL: "https://makeup-portfolio-default-rtdb.firebaseio.com",
  projectId: "makeup-portfolio",
  storageBucket: "makeup-portfolio.appspot.com",
  messagingSenderId: "471962116761",
  appId: "1:471962116761:web:a4f25d95da40c54b918e08",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
