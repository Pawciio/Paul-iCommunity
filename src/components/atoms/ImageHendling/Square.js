import React from "react";
import styled from "styled-components";
import square from "../../../assets/beforeSectionIcon/romb.png";

const SquareBox = styled.div`
  background-image: url(${square});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.OrangeColor};
  margin: 0;
  position: absolute;
`;

const SquareIcon = ({ children }) => (
  <SquareBox>
    <Number>{children}</Number>
  </SquareBox>
);

export default SquareIcon;
