import styled, { css } from "styled-components";

const ParagraphHeading = styled.p`
  font-size: ${({ title }) => (title ? "24px" : "20px")};
  margin: 2px;
  color: ${({ theme, OrangeParagraph }) =>
    OrangeParagraph ? theme.OrangeColor : "black"};
  font-weight: bold;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ height }) => (height ? "34px" : "30px")};
    `};
`;

export default ParagraphHeading;
