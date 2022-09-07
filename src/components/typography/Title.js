import * as React from "react";

import { h2 } from "@styles/generals.module.css";

const Title = ({ styling, children }) => {
  const style = styling ? styling : h2;

  return <h2 className={style}>{children}</h2>;
};

export default Title;
