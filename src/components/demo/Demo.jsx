import React from "react";
import { Title } from "@components/typography";

import {
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
} from "./styles.module.css";

const Demo = ({
  children,
  title,
  subtitle,
  demo,
  demoContainer,
  demoContainerHeader,
  demoContainerP,
}) => (
  <div className={demo || demoSectionTop}>
    <div className={demoContainer || demoContainerSectionTop}>
      <Title styling={demoContainerHeader}>{title}</Title>
      <p className={demoContainerP || demoContainerPSectionTop}>{subtitle}</p>
    </div>
    {children}
  </div>
);

export default Demo;
