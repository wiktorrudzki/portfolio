import React from "react";
import { Nav } from "@components/nav";
import { LanguageProvider } from "@contexts/language";
import { RouteProvider } from "@contexts/route";
import { ThemeProvider } from "@contexts/theme";

import Footer from "./Footer";
import Seo from "./Seo";

type Props = {
  children?: React.ReactNode;
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  path?: string | undefined;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  image,
  path,
}) => (
  <LanguageProvider>
    <ThemeProvider>
      <RouteProvider>
        <Seo
          title={title}
          description={description}
          imageProps={image}
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
