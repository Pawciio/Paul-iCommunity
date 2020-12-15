import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/mineTheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Views/header/header";
import AftertHeader from "./components/organisms/AfterHeader/AfterHeader";
import BeforeSectionLineWithSquare from "./components/molecules/BeforeSectionLineWithSquare/BeforeSectionLineWithSquare";
import SectionOne from "./components/Views/SectionOne/SectionOne";
import SectionTwo from "./components/Views/SectionTwo/SectionTwo";
import SectionThree from "./components/Views/SectionThree/SectionThree";
import SectionFour from "./components/Views/SectionFour/SectionFour";
import SectionFive from "./components/Views/SectionFive/SectionFive";
import Footer from "./components/Views/Footer/Footer";

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
        <BeforeSectionLineWithSquare NumberInSquare="3" />
        <SectionThree />
        <BeforeSectionLineWithSquare NumberInSquare="4" />
        <SectionFour />
        <BeforeSectionLineWithSquare NumberInSquare="5" />
        <SectionFive />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Root;
