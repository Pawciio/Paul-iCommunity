import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";
import ComponentSectionTwo from "../../organisms/ComponentSectionTwo/ComponentSectionTwo";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

const SectionTwo = () => (
  <Wrapper>
    <WrapperText>
      <FlexBox>
        <H2 SectionTitle subText>
          Why
        </H2>
        <H2 SectionTitle>is it so</H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle subText>
          important
        </H2>
        <H2 SectionTitle>now ?</H2>
      </FlexBox>
      <ComponentSectionTwo />
    </WrapperText>
  </Wrapper>
);

export default SectionTwo;
