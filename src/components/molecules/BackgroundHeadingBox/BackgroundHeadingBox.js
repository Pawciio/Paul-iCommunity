import React from "react";
import styled from "styled-components";
import PlayVideoButton from "../../atoms/playVideoButton/playVideoButton";
import headerBackground from "../../../assets/background/headerBackground.png";
import H1 from "../../atoms/Heading/headingH1";
import H2 from "../../atoms/Heading/headingH2";
import ShareIcon from "../ShareIcon/ShareIcon";

const BackgroundBox = styled.div`
  width: 100%;
  height: 635px;
  background-image: url(${headerBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 950px) {
    h1 {
      font-size: 5em;
    }
    h2 {
      font-size: 3em;
    }
  }
  @media all and (max-width: 575px) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.5em;
    }
  }
`;

const BackgroundHeadingBox = () => (
  <BackgroundBox>
    <H1>Your text</H1>
    <H2>for better understanding</H2>
    <PlayVideoButton />
    <ShareIcon />
  </BackgroundBox>
);

export default BackgroundHeadingBox;
