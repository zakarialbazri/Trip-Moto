
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8tw4YAHfeuoBJKpxyBkcxQ35MVWJhq3g",
  authDomain: "trip-moto.firebaseapp.com",
  projectId: "trip-moto",
  storageBucket: "trip-moto.appspot.com",
  messagingSenderId: "462127877568",
  appId: "1:462127877568:web:7aa39ea2609d73c57e4c25",
  measurementId: "G-67EHJ18FSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const provider= new GoogleAuthProvider();
const auth =getAuth(app);

export { auth,provider};