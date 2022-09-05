import * as React from "react";
import Nav from "./Nav";
import Seo from "./Seo";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

export const ThemeContext = React.createContext();

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const darkMode = React.useState(localStorage.getItem("dark-mode") === "true");

  return (
    <ThemeContext.Provider value={darkMode}>
      <Seo title={title} description={description} image={image} path={path} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
