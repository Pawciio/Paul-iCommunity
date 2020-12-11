import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";
import ComponentSectionFour from "../../organisms/ComponentSectionFour/ComponentSectionFour";

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

const SectionFour = () => (
  <Wrapper>
    <WrapperText>
      <FlexBox>
        <H2 SectionTitle subText>
          what
        </H2>
        <H2 SectionTitle>is the main </H2>
        <H2 SectionTitle subText>
          focus
        </H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle>of our community ?</H2>
      </FlexBox>
      <ComponentSectionFour />
    </WrapperText>
  </Wrapper>
);

export default SectionFour;
