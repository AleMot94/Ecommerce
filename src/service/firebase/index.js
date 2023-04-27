// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAu6Xj9y61uW-oBS_n1bXuR7nMsMbR6pc",
  authDomain: "back-ecommerce-f239a.firebaseapp.com",
  projectId: "back-ecommerce-f239a",
  storageBucket: "back-ecommerce-f239a.appspot.com",
  messagingSenderId: "900688379342",
  appId: "1:900688379342:web:b9926089fbe055edee7f9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const bd = getFirestore(app);
export const storage = getStorage(app);
