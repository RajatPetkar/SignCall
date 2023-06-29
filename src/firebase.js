import { initializeApp } from "firebase/app";
import 'firebase/auth';

import { getAuth , RecaptchaVerifier} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGGsqVlp9pRr8XsNsgzrd-1IDA5a5jtOM",
  authDomain: "signcall-b4b1f.firebaseapp.com",
  projectId: "signcall-b4b1f",
  storageBucket: "signcall-b4b1f.appspot.com",
  messagingSenderId: "292666864310",
  appId: "1:292666864310:web:6e66b72d9b4caf6998ac17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
