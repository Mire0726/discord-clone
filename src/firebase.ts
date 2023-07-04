import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnSqYoD09SuQZAHN-2fZ8gLezrMmYTH48",
  authDomain: "discord-clone-udemy-3a2ba.firebaseapp.com",
  projectId: "discord-clone-udemy-3a2ba",
  storageBucket: "discord-clone-udemy-3a2ba.appspot.com",
  messagingSenderId: "547405374581",
  appId: "1:547405374581:web:b1b58becf686fa8c58843c",
  measurementId: "G-BRG4Y2P9T0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
export default db;
