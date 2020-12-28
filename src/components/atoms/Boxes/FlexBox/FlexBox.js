import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ flexColumn }) => (flexColumn ? "column" : null)};
  flex-wrap: wrap;
  justify-content: center;
`;

export default FlexBox;
