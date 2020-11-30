import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/mineTheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/organisms/header/header";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default Root;
