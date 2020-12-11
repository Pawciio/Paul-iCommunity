import styled, { css } from "styled-components";

const H2 = styled.h2`
  margin: 5px;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.6);
  font-size: 5rem;
  color: white;

  ${({ SectionTitle }) =>
    SectionTitle &&
    css`
      text-transform: uppercase;
      margin: 5px 10px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
      font-size: 8rem;
      color: ${({ subText, theme }) => (subText ? theme.OrangeColor : "black")};
      font-weight: ${({ subText }) => (subText ? "bold" : "lighter")};
    `};
`;

export default H2;
