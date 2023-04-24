import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAITk3Z_rfLyY_pxEfza1OZMhXUeNAuuCY",
  authDomain: "dknob-c368f.firebaseapp.com",
  projectId: "dknob-c368f",
  storageBucket: "dknob-c368f.appspot.com",
  messagingSenderId: "971347726509",
  appId: "1:971347726509:web:2c8ffc32643e6f87c3f624",
  measurementId: "G-J62LJ7J040"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);