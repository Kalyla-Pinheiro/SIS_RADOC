import React, { createContext, useState, useContext } from 'react';

const AnoContext = createContext();

export const useAnoContext = () => useContext(AnoContext);

export const AnoProvider = ({ children }) => {
  const [ano, setAno] = useState('');

  return (
    <AnoContext.Provider value={{ ano, setAno }}>
      {children}
    </AnoContext.Provider>
  );
};
