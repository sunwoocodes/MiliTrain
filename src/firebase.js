// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiyd8aVJoeQXSE8iWd_LD2GuIjYxNC2UI",
  authDomain: "service-militrain.firebaseapp.com",
  projectId: "service-militrain",
  storageBucket: "service-militrain.firebasestorage.app",
  messagingSenderId: "769631941718",
  appId: "1:769631941718:web:f33bbf25541a21ed2cb7f7",
  measurementId: "G-SZGEC473MG"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// analytics는 브라우저에서만 실행
if (typeof window !=='undefined') {
  const { getAnalytics } = await import('firebase/analytics');
  const analytics = getAnalytics(app);
};