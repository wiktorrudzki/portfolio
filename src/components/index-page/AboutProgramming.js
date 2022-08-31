import * as React from "react";
import Demo from "../Demo";
import { StaticImage } from "gatsby-plugin-image";

import {
  demoAboutProgramming,
  demoContainerAboutProgramming,
} from "../../styles/demo.module.css";

import {
  aboutProgramming,
  imageWrapperAboutProgramming,
  imageContainerAboutProgramming,
  imageAboutProgramming,
  aboutProgrammingP,
} from "../../styles/index.module.css";

const AboutProgramming = () => {
  return (
    <section className={aboutProgramming}>
      <div className={imageWrapperAboutProgramming}>
        <div className={imageContainerAboutProgramming}>
          <StaticImage
            class={imageAboutProgramming}
            src="../../images/ja3.jpg"
          />
          <Demo
            demo={demoAboutProgramming}
            demoContainer={demoContainerAboutProgramming}
            title="Moje Technologie"
            subtitle="Technologie oraz języki, z którymi miałem styczność"
          >
            <ul className={aboutProgrammingP}>
              <li>React</li>
              <li>Gatsby</li>
              <li>JavaScript ES6</li>
              <li>node JS</li>
              <li>Podstawy c++, c#</li>
              <li>Podstawy python</li>
            </ul>
          </Demo>
        </div>
      </div>
    </section>
  );
};

export default AboutProgramming;
