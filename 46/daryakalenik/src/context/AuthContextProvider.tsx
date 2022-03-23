import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase";
import firebase from "firebase";

export const AuthContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<firebase.User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(setData);
  }, []);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
