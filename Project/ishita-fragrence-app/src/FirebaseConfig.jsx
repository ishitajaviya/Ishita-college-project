
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQZSUugZTBCq79AX_cgeL2MGQ9g_EdYU",
  authDomain: "ishfragrance.firebaseapp.com",
  projectId: "ishfragrance",
  storageBucket: "ishfragrance.appspot.com",
  messagingSenderId: "829175207061",
  appId: "1:829175207061:web:c9f225c11c170ab357379c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB =getFirestore(app);

const auth = getAuth(app);


export {auth,fireDB}