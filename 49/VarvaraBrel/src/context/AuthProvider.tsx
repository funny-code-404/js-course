import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth } from './firebase';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
