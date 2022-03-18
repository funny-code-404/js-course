import { useState, useEffect } from "react";
import { DataContext } from "./dataContext";
import { database } from "../firebase/firebase";

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    database()
      .ref("/todos")
      .on("value", (snapshot) => {
        setData(snapshot.val());
      });
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
