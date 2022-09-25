import React, { useState } from "react";

export const SliderProvider = ({ children }) => {
  const [firstRender, setFirstRender] = useState(true);

  return (
    <SliderContext.Provider value={{ firstRender, setFirstRender }}>
      {children}
    </SliderContext.Provider>
  );
};

export const SliderContext = React.createContext(undefined);
