import * as React from "react";
import Nav from "./Nav";
import Seo from "./Seo";
import Footer from "./Footer";

export const ThemeContext = React.createContext();
export const SetLanguage = React.createContext();

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const darkMode = React.useState(localStorage.getItem("dark-mode") === "true");
  const polish = React.useState(true);

  return (
    <ThemeContext.Provider value={darkMode}>
      <SetLanguage.Provider value={polish}>
        <Seo
          title={title}
          description={description}
          image={image}
          path={path}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </SetLanguage.Provider>
    </ThemeContext.Provider>
  );
};

export default Layout;
