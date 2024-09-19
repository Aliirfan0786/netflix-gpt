// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNvNR3VncEkdolJIc_Oj8tsM6_hM8dzPk",
  authDomain: "netflixgpt-2b38b.firebaseapp.com",
  projectId: "netflixgpt-2b38b",
  storageBucket: "netflixgpt-2b38b.appspot.com",
  messagingSenderId: "810472505331",
  appId: "1:810472505331:web:83206499d20b07626ddc86",
  measurementId: "G-02J65PHTMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

