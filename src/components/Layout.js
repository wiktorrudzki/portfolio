import React from "react";
import { LanguageProvider } from "@contexts/language";
import { ThemeProvider } from "@contexts/theme";

import Footer from "./Footer";
import Nav from "./Nav";
import Seo from "./Seo";

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => (
  <LanguageProvider>
    <ThemeProvider>
      <Seo title={title} description={description} image={image} path={path} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  </LanguageProvider>
);

export default Layout;
