import React from "react";
import { LanguageProvider } from "@contexts/language";
import { ThemeProvider } from "@contexts/theme";

import { Nav } from "../nav";

import { Footer } from "./index";
import { Seo } from "./index";

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
