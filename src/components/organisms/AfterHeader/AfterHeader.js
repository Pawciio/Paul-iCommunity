import React from "react";
import styled from "styled-components";
import AdderImage from "../../atoms/ImageHendling/AddImage";
import SmallLine from "../../../assets/beforeSectionIcon/lineLarge.png";
import icon from "../../../assets/beforeSectionIcon/movedown.svg";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import SquareIcon from "../../atoms/ImageHendling/Square";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AftertHeader = () => (
  <Wrapper>
    <AdderImage icons={SmallLine} width="10px" height="50px" />
    <ParagraphHeading className="">What is your Text</ParagraphHeading>
    <AdderImage icons={icon} width="57px" height="57px" />
    <AdderImage icons={SmallLine} width="10px" height="250px" />
    <SquareIcon children="1" />
  </Wrapper>
);

export default AftertHeader;
