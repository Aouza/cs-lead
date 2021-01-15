import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [progressBar, setProgressBar] = useState(0);

  return (
    <GlobalContext.Provider value={{ progressBar, setProgressBar }}>
      {children}
    </GlobalContext.Provider>
  );
};
