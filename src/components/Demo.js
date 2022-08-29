import * as React from "react";
import {
  demo,
  demoContainer,
  demoContainerHeader,
  demoContainerP,
} from "../styles/demo.module.css";

const Demo = ({ children }) => {
  return (
    <div className={demo}>
      <container className={demoContainer}>
        <h3 className={demoContainerHeader}>Wiktor Rudzki</h3>
        <p className={demoContainerP}>Kilka słów o mnie</p>
      </container>
      {children}
    </div>
  );
};

export default Demo;
