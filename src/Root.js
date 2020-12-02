import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/mineTheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Views/header/header";
import AftertHeader from "./components/organisms/AfterHeader/AfterHeader";
import SectionOne from "./components/Views/SectionOne/SectionOne";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AftertHeader />
        <SectionOne />
      </ThemeProvider>
    </>
  );
}

export default Root;
