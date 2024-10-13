// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKmkhrlr55zDYvIAkWLe2DUZGzgUFpMQI",
  authDomain: "login-tienda-9d3ba.firebaseapp.com",
  projectId: "login-tienda-9d3ba",
  storageBucket: "login-tienda-9d3ba.appspot.com",
  messagingSenderId: "538192207978",
  appId: "1:538192207978:web:37b35e5d8d9f9d5085aa13",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
