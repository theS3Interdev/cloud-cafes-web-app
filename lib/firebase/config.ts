/* import the functions needed from the SDKs */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* firebase configuration object containing keys and identifiers */
const firebaseConfig = {
  apiKey: "AIzaSyAYxPgRTOxHzGBZ7JIaYZmeObJD1oJ2gGo",
  authDomain: "cloud-coffee-house.firebaseapp.com",
  projectId: "cloud-coffee-house",
  storageBucket: "cloud-coffee-house.appspot.com",
  messagingSenderId: "141945365863",
  appId: "1:141945365863:web:6b810eb613f1b8c3963bc2",
  measurementId: "G-RZHSMDNRR3",
};

/* initialize firebase */
const app = initializeApp(firebaseConfig);

/* initialize firebase services */
const db = getFirestore(app);

/* export functions */
export { db };
