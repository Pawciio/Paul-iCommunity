import styled from "styled-components";

const ParagraphHeading = styled.p`
  font-size: 20px;
  margin: 2px;
  color: ${({ theme }) => theme.OrangeColor};
  font-weight: bold;
  text-transform: uppercase;
`;

export default ParagraphHeading;
