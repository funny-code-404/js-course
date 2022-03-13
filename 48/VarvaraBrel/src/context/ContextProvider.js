import { useEffect, useState } from 'react';
import { DataContext } from './Context';
import { database } from './firebase';

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    database()
      .ref('/todoList')
      .on('value', (snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
