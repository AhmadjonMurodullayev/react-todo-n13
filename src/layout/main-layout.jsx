import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <>
      <header>header</header>

      <main>{children}</main>

      <footer>footer</footer>
    </>
  );
};
