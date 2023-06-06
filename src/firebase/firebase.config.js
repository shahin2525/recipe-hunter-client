// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBI7mk0xrJMCc0B96RMYCsjigClexU9t5I",
  authDomain: "recipe-garden-client.firebaseapp.com",
  projectId: "recipe-garden-client",
  storageBucket: "recipe-garden-client.appspot.com",
  messagingSenderId: "1078790675324",
  appId: "1:1078790675324:web:8ac9c1c07b42f4d39fe2f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
