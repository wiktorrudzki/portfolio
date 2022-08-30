import * as React from "react";

const Demo = ({
  children,
  demo,
  demoContainer,
  demoContainerHeader,
  demoContainerP,
}) => {
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
