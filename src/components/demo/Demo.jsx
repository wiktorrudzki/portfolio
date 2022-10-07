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
  styles
}) => (
  <div className={styles.demo || demoSectionTop}>
    <div className={styles.demoContainer || demoContainerSectionTop}>
      <Title styling={styles.demoContainerHeader}>{title}</Title>
      <p className={styles.demoContainerP || demoContainerPSectionTop}>{subtitle}</p>
    </div>
    {children}
  </div>
);

export default Demo;
