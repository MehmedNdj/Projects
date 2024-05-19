// SelectedItemContext.js
import React, { createContext, useState, useContext } from 'react';

const SelectedItemContext = createContext();

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export const useSelectedItem = () => {
  return useContext(SelectedItemContext);
};
