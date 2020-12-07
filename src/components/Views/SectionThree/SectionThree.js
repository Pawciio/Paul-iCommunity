import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";
import ComponentSectionThree from "../../organisms/ComponentSectionThree/ComponentSectionThree";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;

  @media all and (max-width: 950px) {
    h2 {
      font-size: 3em;
    }
  }

  @media all and (max-width: 575px) {
    h2 {
      font-size: 1.5em;
    }
  }
`;

const SectionThree = () => (
  <Wrapper>
    <WrapperText>
      <FlexBox>
        <H2 SectionTitle subText>
          How
        </H2>
        <H2 SectionTitle>big is </H2>
        <H2 SectionTitle subText>
          Our
        </H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle>community ?</H2>
      </FlexBox>
      <ComponentSectionThree />
    </WrapperText>
  </Wrapper>
);

export default SectionThree;
