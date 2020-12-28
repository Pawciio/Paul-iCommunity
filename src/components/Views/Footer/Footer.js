import React from "react";
import styled from "styled-components";
import FooterBackground from "../../../assets/background/FooterBackground.png";
import footerIconFacebook from "../../../assets/SocialMediaIcon/footerIconFacebook.png";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SpanLine from "../../atoms/SpanLine/SpanLine";
import ImportantWord from "../../atoms/Paragraph/ImportantWord";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  .footerBackground {
    position: absolute;
    right: 0;
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

const WrapperContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 485px;
  right: 0;
  top: 60px;
`;

const FooterTextConteiner = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

const Footer = () => (
  <Wrapper>
    <AddImage
      className="footerBackground"
      icons={FooterBackground}
      width="1200px"
      height="875px"
    >
      <WrapperContentStyle>
        <AddImage icons={footerIconFacebook} width="100px" height="100px" />
        <FooterTextConteiner>
          <ParagraphHeading className="titleStyle" title secondary>
            Join our Facebook group
          </ParagraphHeading>
          <SpanLine />
          <ImportantWord whiteWord> Your text</ImportantWord>
          <Paragraph WhiteParagraph>a non-profit organization</Paragraph>
          <SpanLine />
          <Paragraph WhiteParagraph>A8 Hawthorn Avenue,</Paragraph>
          <Paragraph WhiteParagraph>Billingham TS22</Paragraph>
          <Paragraph WhiteParagraph>England</Paragraph>
          <Paragraph WhiteParagraph className="footerNumberMargin">
            07748 602060
          </Paragraph>
        </FooterTextConteiner>
      </WrapperContentStyle>
    </AddImage>
  </Wrapper>
);

export default Footer;
