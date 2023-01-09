
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIY5WWweLNztS1Z79-krSQDp7whqrVVx8",
  authDomain: "fir-login-8e3e2.firebaseapp.com",
  projectId: "fir-login-8e3e2",
  storageBucket: "fir-login-8e3e2.appspot.com",
  messagingSenderId: "1058828497239",
  appId: "1:1058828497239:web:e77218214fb6183531ce12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };