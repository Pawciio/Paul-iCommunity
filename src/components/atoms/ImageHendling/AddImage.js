import styled from "styled-components";

const AdderImage = styled.div`
  background-image: url(${({ icons }) => icons});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default AdderImage;
