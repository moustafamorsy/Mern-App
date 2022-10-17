
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1rOq7aL3mX52ntHWJ39kf49g5x2zkBKg",
  authDomain: "react-netflix-clone-6c89a.firebaseapp.com",
  projectId: "react-netflix-clone-6c89a",
  storageBucket: "react-netflix-clone-6c89a.appspot.com",
  messagingSenderId: "562421635798",
  appId: "1:562421635798:web:9d2c1ed1d7d7a875fac777",
  measurementId: "G-725255P1XX"
};


const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);