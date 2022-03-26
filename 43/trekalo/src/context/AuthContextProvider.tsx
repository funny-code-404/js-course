import { useState, useEffect } from "react";
import { AuthContext, User } from "./AuthContext";
import { auth } from "../firebase";

type AuthProps = {
  children: React.ReactChildren | React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [authData, setAuthData] = useState<User>(null);

  useEffect(() => {
    auth.onAuthStateChanged((res) => {
      setAuthData(res);
    });
  }, []);
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
