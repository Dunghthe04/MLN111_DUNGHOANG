import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHA_ZRc20T7TreP55OKcwoHSjlS4xYRIE",
  authDomain: "mln-111-group2.firebaseapp.com",
  databaseURL: "https://mln-111-group2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mln-111-group2",
  storageBucket: "mln-111-group2.firebasestorage.app",
  messagingSenderId: "724066399446",
  appId: "1:724066399446:web:2b2c01b924e8e9efb74577",
  measurementId: "G-QXZD7TTLT4"
};

export const adminUid = "zN4N69XJuscHAbvFnsteIWgRhKR2"

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

