import { useState } from 'react';
import DataContext from '../context/DataContext';

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    label: [],
  });

  const saveAllStates = (data) =>
    setData((prevData) => ({
      label: [...prevData.label, data.label],
    }));

  return (
    <DataContext.Provider value={{ data, setData: saveAllStates }}>
      {children}
    </DataContext.Provider>
  );
};
