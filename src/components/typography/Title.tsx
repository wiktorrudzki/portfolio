import React from "react";

import { h2 } from "./styles.module.css";

type Props = {
  styling: string;
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ styling, children }) => {
  const style = styling ? styling : h2;

  return <h2 className={style}>{children}</h2>;
};

export default Title;
