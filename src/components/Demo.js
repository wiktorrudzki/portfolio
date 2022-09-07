import * as React from "react";
import Title from "@components/typography/Title";

import {
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
} from "@styles/demo.module.css";


const Demo = ({
  children,
  title,
  subtitle,
  ...props
}) => {
  const demo = props.demo || demoSectionTop;
  const demoContainer = props.demoContainer || demoContainerSectionTop;
  const demoContainerHeader = props.demoContainerHeader || undefined;
  const demoContainerP = props.demoContainerP || demoContainerPSectionTop;

  return (
    <div className={demo}>
      <container className={demoContainer}>
        <Title styling={demoContainerHeader}>{title}</Title>
        <p className={demoContainerP}>{subtitle}</p>
      </container>
      {children}
    </div>
  );
};

export default Demo;
