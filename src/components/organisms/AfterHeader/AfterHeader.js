import React from "react";
import styled from "styled-components";
import AdderImage from "../../atoms/ImageHendling/AddImage";
import Line from "../../../assets/beforeSectionIcon/lineLarge.png";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import BeforeSectionLineWithSquare from "../../molecules/BeforeSectionLineWithSquare/BeforeSectionLineWithSquare";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AftertHeader = () => (
  <Wrapper>
    <AdderImage icons={Line} width="4px" height="50px" />
    <ParagraphHeading OrangeParagraph>What is your Text</ParagraphHeading>
    <BeforeSectionLineWithSquare NumberInSquare="1" />
  </Wrapper>
);

export default AftertHeader;
