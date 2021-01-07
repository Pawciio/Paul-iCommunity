import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";
import ComponentSectionTwo from "../../organisms/ComponentSectionTwo/ComponentSectionTwo";
import BeforeSectionLineWithSquare from "../../molecules/BeforeSectionLineWithSquare/BeforeSectionLineWithSquare";

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

const SectionTwo = () => (
  <Wrapper id="sectionTwo" className="constentSection_handlerMenu">
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
    <BeforeSectionLineWithSquare NumberInSquare="3" />
  </Wrapper>
);

export default SectionTwo;
