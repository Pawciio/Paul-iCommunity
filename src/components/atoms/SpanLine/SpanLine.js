import styled from "styled-components";

const SpanLine = styled.div`
  width: 150px;
  height: 3px;
  background-color: ${({ theme, OrangeLine }) =>
    OrangeLine ? theme.OrangeColor : "white"};
  margin: 35px 0;
`;

export default SpanLine;
