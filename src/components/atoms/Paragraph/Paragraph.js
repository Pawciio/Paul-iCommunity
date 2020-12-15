import styled, { css } from "styled-components";

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;

  ${({ WhiteParagraph }) =>
    WhiteParagraph &&
    css`
      color: white;
      font-size: 23px;
      font-weight: lighter;
      line-height: 35px;
    `};
`;

export default Paragraph;
