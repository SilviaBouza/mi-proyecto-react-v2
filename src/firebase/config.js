import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvkWqD-kuIeK5rm5SWJVevEkBwacVPgAU",
  authDomain: "proyecto-react-js2026.firebaseapp.com",
  projectId: "proyecto-react-js2026",
  storageBucket: "proyecto-react-js2026.firebasestorage.app",
  messagingSenderId: "735402449876",
  appId: "1:735402449876:web:385981ac918f0f7513d441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);


