import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import AddImage from "../../atoms/ImageHendling/AddImage";
import BackgroundSectionOne from "../../../assets/background/section1Background.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;
`;

const SectionOne = () => (
  <Wrapper>
    <WrapperText>
      <H2 SectionTitle>what is</H2>
      <H2 SectionTitle subText>
        your text
      </H2>
    </WrapperText>
    <AddImage icons={BackgroundSectionOne} width="100%" height="450px" />
  </Wrapper>
);

export default SectionOne;
