import * as React from "react";
import Nav from "./Nav";
import Seo from "./Seo";

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
