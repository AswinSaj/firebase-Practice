import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRQn4flB8FiMLcfM97QixvxszkxVi27Yk",
  authDomain: "fir-crash-eb408.firebaseapp.com",
  projectId: "fir-crash-eb408",
  storageBucket: "fir-crash-eb408.appspot.com",
  messagingSenderId: "1026714429261",
  appId: "1:1026714429261:web:ed16e22a57b27e3c50f904",
  measurementId: "G-CSK08J1DG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
