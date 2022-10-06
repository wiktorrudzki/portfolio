import React from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@hooks/useTheme";

import { futureStyles } from "../styles/future";

const FutureListItem = ({ children }) => {
  const { themeState } = useTheme();

  const { ref, inView: isVisible } = useInView();

  return <li ref={ref} className={isVisible ? `${futureStyles[themeState.theme].div2Li} ${futureStyles[themeState.theme].div2LiFutureAnimation}` : futureStyles[themeState.theme].div2Li}>{children}</li>;
};

export default FutureListItem;
