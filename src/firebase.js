import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from "react";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAE1mcaJs_wNDU63ULrWugr3QaBFya1_w8",
  authDomain: "healassis-c8470.firebaseapp.com",
  databaseURL: "https://healassis-c8470-default-rtdb.firebaseio.com",
  projectId: "healassis-c8470",
  storageBucket: "healassis-c8470.appspot.com",
  messagingSenderId: "607521578426",
  appId: "1:607521578426:web:e83c4c5a365b45ad495183",
  measurementId: "G-TTT68HCWZ2"
});

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ setUser, user }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { setUser: auth.setUser, isAuthenticated: auth.user };
};
