import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;
`;

const SectionOne = () => (
  <Wrapper>
    <WrapperText>
      <H2 SectionTitle>what is</H2>
      <H2 SectionTitle subText>
        your text
      </H2>
    </WrapperText>
  </Wrapper>
);

export default SectionOne;
