import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import AddImage from "../../atoms/ImageHendling/AddImage";
import BackgroundSectionOne from "../../../assets/background/section1Background.png";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import ImportantWord from "../../atoms/Paragraph/ImportantWord";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .ContentTextSectionOne {
    display: flex;
    align-items: center;
    margin: 30px;
  }
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <WrapperTextContent>
      <ParagraphHeading secondary className="ContentTextSectionOne">
        iCommunity is a gathering that is supposed to bring
      </ParagraphHeading>
      <WrapperText>
        <ImportantWord>joy</ImportantWord>
        <ParagraphHeading secondary>to everyone that is</ParagraphHeading>
        <ImportantWord>involved</ImportantWord>
      </WrapperText>
    </WrapperTextContent>
  </Wrapper>
);

export default SectionOne;
