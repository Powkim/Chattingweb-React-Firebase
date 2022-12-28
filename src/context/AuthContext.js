import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      //현재 유저가 있는경우 해당 유저로 설정
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
