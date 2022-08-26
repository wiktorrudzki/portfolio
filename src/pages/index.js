import * as React from "react";
import Layout from "../components/Layout";
import {
  hpWrapper,
  hpSection,
  hpSectionLeft,
  hpSectionRight,
} from "../styles/layout.module.css";

import "../styles/global.css";

const IndexPage = () => {
  return (
    <Layout>
      <main className={hpWrapper}>
        <section className={`${hpSection} ${hpSectionLeft}`}></section>
        <section className={`${hpSection} ${hpSectionRight}`}>2</section>
      </main>
    </Layout>
  );
};

export default IndexPage;
