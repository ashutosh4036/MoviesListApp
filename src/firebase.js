import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1hz64PAdRdLQcYH3dQEZDPENGCDRGKLI",
  authDomain: "loginsignup-c28c4.firebaseapp.com",
  projectId: "loginsignup-c28c4",
  storageBucket: "loginsignup-c28c4.appspot.com",
  messagingSenderId: "238553421599",
  appId: "1:238553421599:web:6bd46ba740969fd831c22a",
  measurementId: "G-PPPELBYV11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
