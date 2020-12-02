import React from "react";
import AdderImage from "../../atoms/ImageHendling/AddImage";
import Line from "../../../assets/beforeSectionIcon/lineLarge.png";
import SquareIcon from "../../atoms/ImageHendling/Square";

const BeforeSectionLineWithSquare = ({ NumberInSquare }) => (
  <>
    <AdderImage icons={Line} width="10px" height="250px" margin="25px 0 0 0" />
    <SquareIcon children={NumberInSquare} />
  </>
);

export default BeforeSectionLineWithSquare;
