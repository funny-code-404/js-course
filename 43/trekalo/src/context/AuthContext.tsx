import { createContext } from "react";
import firebase from "firebase";
export type User = firebase.User | null;
export const AuthContext = createContext<User>(null);
