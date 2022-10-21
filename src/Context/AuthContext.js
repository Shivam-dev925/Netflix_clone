import { createContext, useContext } from "react";
import { Auth } from "../Firebase";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext();

const UseAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const [error, setError] = useState("sdvhsfydwhdvsvdvhhv");

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const GoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(Auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ SignIn, SignUp, user, setUser, error, setError, GoogleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default UseAuthContextProvider;

export const UseAuth = () => useContext(AuthContext);
