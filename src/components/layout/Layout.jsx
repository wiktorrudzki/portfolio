import React from "react";
import { Nav } from "@components/nav";
import { LanguageProvider } from "@contexts/language";
import { RouteProvider } from "@contexts/route";
import { ThemeProvider } from "@contexts/theme";

import Footer from "./Footer";
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
      <RouteProvider>
        <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </RouteProvider>
    </ThemeProvider>
  </LanguageProvider>
);

export default Layout;
