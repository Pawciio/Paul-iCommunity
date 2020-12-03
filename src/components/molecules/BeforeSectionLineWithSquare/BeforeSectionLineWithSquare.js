import React from "react";
import styled from "styled-components";
import AdderImage from "../../atoms/ImageHendling/AddImage";
import Line from "../../../assets/beforeSectionIcon/lineLarge.png";
import SquareIcon from "../../atoms/ImageHendling/Square";
import movedown from "../../../assets/beforeSectionIcon/movedown.svg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

const BeforeSectionLineWithSquare = ({ NumberInSquare }) => (
  <Wrapper>
    <AdderImage icons={movedown} width="57px" height="57px" margin="15px 0" />
    <AdderImage icons={Line} width="4px" height="250px" />
    <SquareIcon children={NumberInSquare} />
  </Wrapper>
);

export default BeforeSectionLineWithSquare;
