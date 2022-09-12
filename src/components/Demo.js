import React from "react";
import Title from "@components/typography/Title";

import {
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
} from "../features/home-page/styles/section-top/section-top.module.css";

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
