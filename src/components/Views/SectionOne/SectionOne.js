import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import AddImage from "../../atoms/ImageHendling/AddImage";
import BackgroundSectionOne from "../../../assets/background/section1Background.png";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import ImportantWord from "../../atoms/Paragraph/ImportantWord";
import BeforeSectionLineWithSquare from "../../molecules/BeforeSectionLineWithSquare/BeforeSectionLineWithSquare";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .ContentTextSectionOne {
    display: flex;
    align-items: center;
    margin: 30px;
    text-align: center;
  }

  @media all and (max-width: 950px) {
    h2 {
      font-size: 3em;
    }
    p,
    .ContentTextSectionOne {
      font-size: 16px;
      margin: 15px 3px;
    }
    span {
      font-size: 16px;
    }
  }

  @media all and (max-width: 575px) {
    h2 {
      font-size: 1.5em;
    }
    p,
    .ContentTextSectionOne {
      font-size: 14px;
    }
    span {
      font-size: 14px;
    }
  }
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionOne = () => (
  <Wrapper id="sectionOne" className="constentSection_handlerMenu">
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
    <BeforeSectionLineWithSquare NumberInSquare="2" />
  </Wrapper>
);

export default SectionOne;
