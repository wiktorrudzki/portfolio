import * as React from "react";

import {
  demoSectionTop,
  demoContainerSectionTop,
  demoContainerHeaderSectionTop,
  demoContainerPSectionTop,
} from "../styles/demo.module.css";

const Demo = ({
  children,
  title,
  subtitle,
  ...props
}) => {
  let demo = props.demo || demoSectionTop;
  let demoContainer = props.demoContainer || demoContainerSectionTop;
  let demoContainerHeader = props.demoContainerHeader || demoContainerHeaderSectionTop;
  let demoContainerP = props.demoContainerP || demoContainerPSectionTop;

  return (
    <div className={demo}>
      <container className={demoContainer}>
        <h3 className={demoContainerHeader}>{title}</h3>
        <p className={demoContainerP}>{subtitle}</p>
      </container>
      {children}
    </div>
  );
};

export default Demo;
