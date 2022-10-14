import React from "react";
import { Title } from "@components/typography";

import {
  demoContainerPSectionTop,
  demoContainerSectionTop,
  demoSectionTop,
} from "./styles.module.css";

type Styles = {
  demo?: string;
  demoContainer?: string;
  demoContainerHeader?: string;
  demoContainerP?: string;
};

type Props = {
  children: React.ReactNode;
  title: string | undefined;
  subtitle: string;
  styles: Styles;
};

const Demo: React.FC<Props> = ({ children, title, subtitle, styles }) => (
  <div className={styles.demo || demoSectionTop}>
    <div className={styles.demoContainer || demoContainerSectionTop}>
      <Title styling={styles.demoContainerHeader}>{title}</Title>
      <p className={styles.demoContainerP || demoContainerPSectionTop}>
        {subtitle}
      </p>
    </div>
    {children}
  </div>
);

export default Demo;
