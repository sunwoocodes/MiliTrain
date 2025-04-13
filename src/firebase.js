// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxYYTyWWfZW31HqwL9kY3XQz_flpsI_7c",
  authDomain: "militrain-41e31.firebaseapp.com",
  projectId: "militrain-41e31",
  storageBucket: "militrain-41e31.firebasestorage.app",
  messagingSenderId: "910250395245",
  appId: "1:910250395245:web:4e316231556e1931576164",
  measurementId: "G-B3Q03BZRVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);