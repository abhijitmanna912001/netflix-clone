import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlack4nOS9Q95hx7fEVALtZBk9ORSAk98",
  authDomain: "netflix-clone-56f50.firebaseapp.com",
  projectId: "netflix-clone-56f50",
  storageBucket: "netflix-clone-56f50.appspot.com",
  messagingSenderId: "424593617507",
  appId: "1:424593617507:web:7c8942abe0a7697fa1fe56",
  measurementId: "G-43H0HPDX1Y",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
