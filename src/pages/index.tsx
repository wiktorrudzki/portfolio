import React from "react";
import { Layout } from "@components/layout";
import HomePage from "@features/home-page";

import "../i18n";

const IndexPage: React.FC = () => (
  <Layout>
    <script
      async
      custom-element="amp-position-observer"
      src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"
    ></script>
    <script
      async
      custom-element="amp-animation"
      src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"
    ></script>
    <HomePage />
  </Layout>
);

export default IndexPage;
