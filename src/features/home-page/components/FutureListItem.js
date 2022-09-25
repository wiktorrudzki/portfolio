import React from "react";
import { useTheme } from "@hooks/useTheme";

import { futureStyles } from "../styles/future";

const FutureListItem = ({ children }) => {
  const { themeState } = useTheme();

  return <li className={futureStyles[themeState.theme].div2Li}>{children}</li>;
};

export default FutureListItem;
