import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB-Tt772QlZfvTj5vRlK1NiopR9lLUKTM",
  authDomain: "netflix-clone-4b161.firebaseapp.com",
  projectId: "netflix-clone-4b161",
  storageBucket: "netflix-clone-4b161.appspot.com",
  messagingSenderId: "442940737982",
  appId: "1:442940737982:web:c3e0f740035fd0fdcf11ef",
  measurementId: "G-636L1SCS97",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const Auth = FirebaseApp.auth();

export { Auth };
