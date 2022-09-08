import * as React from "react";
import { LanguageProvider } from "@hooks/useLanguage";
import { ThemeProvider } from "@hooks/useTheme";

import Footer from "./Footer";
import Nav from "./Nav";
import Seo from "./Seo";

export const SetLanguage = React.createContext();

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  return (
      <LanguageProvider>
        <ThemeProvider>
          <Seo
            title={title}
            description={description}
            image={image}
            path={path}
          />
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </LanguageProvider>
  );
};

export default Layout;
