import React from "react";
import { Title } from "@components/typography";

import {
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
} from "@components-styles/demo/demo.module.css";

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
    <container className={demoContainer || demoContainerSectionTop}>
      <Title styling={demoContainerHeader || undefined}>{title}</Title>
      <p className={demoContainerP || demoContainerPSectionTop}>{subtitle}</p>
    </container>
    {children}
  </div>
);

export default Demo;
