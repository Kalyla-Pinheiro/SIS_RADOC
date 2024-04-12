import React, { createContext, useState, useEffect } from "react";

const AnoContext = createContext();

const AnoProvider = ({ children }) => {
  const [ano, setAno] = useState(() => localStorage.getItem("ano") || "");

  const setAnoValue = (value) => {
    setAno(value);
  };

  useEffect(() => {
    localStorage.setItem("ano", ano);
  }, [ano]);

  return (
    <AnoContext.Provider value={{ ano, setAnoValue }}>
      {children}
    </AnoContext.Provider>
  );
};

export { AnoProvider, AnoContext };
