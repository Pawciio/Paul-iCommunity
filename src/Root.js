import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/mineTheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Views/header/header";
import AftertHeader from "./components/organisms/AfterHeader/AfterHeader";
import SectionOne from "./components/Views/SectionOne/SectionOne";
import BeforeSectionLineWithSquare from "./components/molecules/BeforeSectionLineWithSquare/BeforeSectionLineWithSquare";
import SectionTwo from "./components/Views/SectionTwo/SectionTwo";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AftertHeader />
        <SectionOne />
        <BeforeSectionLineWithSquare NumberInSquare="2" />
        <SectionTwo />
      </ThemeProvider>
    </>
  );
}

export default Root;
