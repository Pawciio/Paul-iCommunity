import React from "react";
import styled from "styled-components";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Line from "../../../assets/beforeSectionIcon/lineLarge.png";
import Image1 from "../../../assets/section5beforeFooter/footerimage1.png";
import Image2 from "../../../assets/section5beforeFooter/footerimage2.png";
import Image3 from "../../../assets/section5beforeFooter/footerimage3.png";
import Image4 from "../../../assets/section5beforeFooter/footerimage4.png";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media all and (max-width: 950px) {
    p,
    span {
      font-size: 16px;
    }
  }

  @media all and (max-width: 575px) {
    p,
    span {
      font-size: 14px;
    }
  }
`;

const WrapperElementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  margin: 10px;
  position: relative;

  .lineVertical {
    position: relative;
    bottom: -26px;
    z-index: -1;
  }
  .lineHorizontal {
    transform: rotate(90deg);
  }

  .contentText {
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 0.7px;
    max-width: 300px;
    line-height: 35px;
    font-family: Spectral;
    font-style: italic;
    text-align: center;
  }
`;

class ComponentSectionFive extends React.Component {
  state = {
    ElementsSectionFive: [
      {
        title: "Helping for teens",
        images: Image1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        longLine: false,
      },
      {
        title: "Webinars, trainings and therapy",
        images: Image2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        longLine: true,
      },
      {
        title: "Sunday free canteen for homeless",
        images: Image3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        longLine: false,
      },
      {
        title: "Local help-the-elderly groups",
        images: Image4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        longLine: false,
      },
    ],
  };

  render() {
    return (
      <Wrapper>
        {this.state.ElementsSectionFive.map((item) => (
          <WrapperElementBox>
            <AddImage
              className="lineVertical"
              icons={Line}
              width="4px"
              height={item.longLine ? "180px" : "90px"}
            />
            <AddImage
              icons={item.images}
              width="320px"
              height="320px"
              margin="25px 0"
            />
            <ParagraphHeading title OrangeParagraph>
              {item.title}
            </ParagraphHeading>
            <AddImage
              className="lineHorizontal"
              icons={Line}
              width="4px"
              height="70px"
            />
            <Paragraph className="contentText">{item.content}</Paragraph>
          </WrapperElementBox>
        ))}
      </Wrapper>
    );
  }
}

export default ComponentSectionFive;
