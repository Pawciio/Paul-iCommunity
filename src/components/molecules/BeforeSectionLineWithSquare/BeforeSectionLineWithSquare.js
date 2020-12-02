import React from "react";
import AdderImage from "../../atoms/ImageHendling/AddImage";
import Line from "../../../assets/beforeSectionIcon/lineLarge.png";
import SquareIcon from "../../atoms/ImageHendling/Square";
import movedown from "../../../assets/beforeSectionIcon/movedown.svg";

const BeforeSectionLineWithSquare = ({ NumberInSquare }) => (
  <>
    <AdderImage icons={movedown} width="57px" height="57px" margin="15px 0" />
    <AdderImage icons={Line} width="4px" height="250px" />
    <SquareIcon children={NumberInSquare} />
  </>
);

export default BeforeSectionLineWithSquare;
