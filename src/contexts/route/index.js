import React, { useState } from "react";

export const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("/");

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const RouteContext = React.createContext(undefined);
