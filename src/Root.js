import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { theme } from "./theme/mineTheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Views/header/header";
import SectionOne from "./components/Views/SectionOne/SectionOne";
import SectionTwo from "./components/Views/SectionTwo/SectionTwo";
import SectionThree from "./components/Views/SectionThree/SectionThree";
import SectionFour from "./components/Views/SectionFour/SectionFour";
import SectionFive from "./components/Views/SectionFive/SectionFive";
import Navigation from "./components/organisms/Navigation/Navigation";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </ThemeProvider>
    </>
  );
}

export default Root;
