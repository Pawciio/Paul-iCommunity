import styled, { css } from "styled-components";

const ParagraphHeading = styled.p`
  font-size: 20px;
  margin: 2px;
  color: ${({ theme, OrangeParagraph }) =>
    OrangeParagraph ? theme.OrangeColor : "black"};
  font-weight: bold;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 30px;
    `};
`;

export default ParagraphHeading;