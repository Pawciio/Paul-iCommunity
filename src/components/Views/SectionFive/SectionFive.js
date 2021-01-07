import React from "react";
import styled from "styled-components";
import H2 from "../../atoms/Heading/headingH2";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";
import ComponentSectionFive from "../../organisms/ComponentSectionFive/ComponentSectionFive";

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

const SectionFive = () => (
  <Wrapper id="sectionFive" className="constentSection_handlerMenu">
    <WrapperText>
      <FlexBox>
        <H2 SectionTitle>our goal is to </H2>
        <H2 SectionTitle subText>
          show
        </H2>
        <H2 SectionTitle>people the </H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle>better side of the world</H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle>through</H2>
        <H2 SectionTitle subText>
          unity and help
        </H2>
        <H2 SectionTitle>in</H2>
      </FlexBox>
      <FlexBox>
        <H2 SectionTitle>in diffucult situations</H2>
      </FlexBox>
      <ComponentSectionFive />
    </WrapperText>
  </Wrapper>
);

export default SectionFive;
