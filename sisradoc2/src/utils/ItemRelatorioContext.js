import React, { createContext, useState, useEffect } from 'react';

const ItemRelatorioContext = createContext();

const ItemRelatorioProvider = ({ children }) => {
  const [itemRelatorio, setItemRelatorio] = useState(() => localStorage.getItem('itemRelatorio') || '');

  const setItemRelatorioValue = (value) => {
    setItemRelatorio(value);
  };

  useEffect(() => {
    localStorage.setItem('itemRelatorio', itemRelatorio);
  }, [itemRelatorio]);

  return (
    <ItemRelatorioContext.Provider value={{ itemRelatorio, setItemRelatorioValue }}>
      {children}
    </ItemRelatorioContext.Provider>
  );
};

export { ItemRelatorioProvider, ItemRelatorioContext };
