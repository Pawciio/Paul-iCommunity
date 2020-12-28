import React from "react";
import styled from "styled-components";
import footerIconFacebook from "../../../assets/SocialMediaIcon/footerIconFacebook.png";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SpanLine from "../../atoms/SpanLine/SpanLine";
import ImportantWord from "../../atoms/Paragraph/ImportantWord";
import FlexBox from "../../atoms/Boxes/FlexBox/FlexBox";

const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.OrangeColor};
  display: flex;
  justify-content: center;

  .footerBackground {
    position: absolute;
    right: 0;
  }
  @media all and (max-width: 1320px) {
    margin-top: 75px;
  }

  @media all and (max-width: 950px) {
    p {
      font-size: 16px;
    }
  }

  @media all and (max-width: 575px) {
    p {
      font-size: 14px;
    }
  }
`;

const FooterTextConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  .titleStyle {
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    font-family: sans-serif;
    font-weight: lighter;
    line-height: 45px;
    margin: 20px 0 5px 0;
  }

  .footerNumberMargin {
    margin: 35px 0;
  }

  @media all and (max-width: 700px) {
    flex-direction: column;
  }
`;

const FooterInMedia = () => (
  <Wrapper>
    <FooterTextConteiner>
      <FlexBox flexColumn>
        <AddImage icons={footerIconFacebook} width="100px" height="100px" />
        <ParagraphHeading className="titleStyle" title secondary>
          Join our
        </ParagraphHeading>
        <ParagraphHeading className="titleStyle" title secondary>
          Facebook group
        </ParagraphHeading>
      </FlexBox>
      <FlexBox flexColumn>
        <ImportantWord whiteWord> Your text</ImportantWord>
        <Paragraph WhiteParagraph>a non-profit organization</Paragraph>
        <SpanLine />
      </FlexBox>
      <FlexBox flexColumn>
        <ImportantWord whiteWord>Your text</ImportantWord>
        <Paragraph WhiteParagraph>@nonprofit.com</Paragraph>
        <SpanLine />
      </FlexBox>
      <FlexBox flexColumn>
        <Paragraph WhiteParagraph>A8 Hawthorn Avenue,</Paragraph>
        <Paragraph WhiteParagraph>Billingham TS22</Paragraph>
        <Paragraph WhiteParagraph>England</Paragraph>
        <Paragraph WhiteParagraph className="footerNumberMargin">
          07748 602060
        </Paragraph>
      </FlexBox>
    </FooterTextConteiner>
  </Wrapper>
);

export default FooterInMedia;
