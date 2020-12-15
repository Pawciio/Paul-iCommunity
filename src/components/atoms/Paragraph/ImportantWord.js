import styled from "styled-components";

const ImportantWord = styled.span`
  color: ${({ theme, whiteWord }) => (whiteWord ? "white" : theme.OrangeColor)};
  text-transform: uppercase;
  font-weight: ${({ whiteWord }) => (whiteWord ? "lighter" : "bold")};
  font-size: ${({ whiteWord }) => (whiteWord ? "23px" : "30px")};
  text-align: center;
`;

export default ImportantWord;
