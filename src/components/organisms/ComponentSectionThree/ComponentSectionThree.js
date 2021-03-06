import React from "react";
import styled from "styled-components";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ConectingImage from "../../../assets/section3Icon/section3image1.png";
import DoneImage from "../../../assets/section3Icon/section3image2.png";
import RunImage from "../../../assets/section3Icon/section3image3.png";
import ConnectImage from "../../../assets/section3Icon/section3image4.png";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

const WrapperElementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  margin: 10px;

  .textContent {
    text-align: center;
    line-height: 35px;
    font-family: "Spectral", serif;
    letter-spacing: 0.08em;
    font-weight: 600;
    font-style: italic;
    font-size: 24px;
  }

  @media all and (max-width: 950px) {
    .textContent {
      font-size: 16px;
    }
    .FontSizeClassNumber {
      font-size: 18px;
    }
  }

  @media all and (max-width: 575px) {
    .textContent {
      font-size: 14px;
    }
    .FontSizeClassNumber {
      font-size: 18px;
    }
    .SizeImageInMedia {
      width: 160px;
      height: 160px;
    }
  }
`;

class ComponentSectionThree extends React.Component {
  state = {
    ElementsSectionTwo: [
      {
        contentUp: "We'r connecting",
        images: ConectingImage,
        number: "100 000",
        contentBottom: "people",
      },
      {
        contentUp: "We have already done",
        images: DoneImage,
        number: "1500",
        contentBottom: "charities",
      },
      {
        contentUp: "We have already run",
        images: RunImage,
        number: "450",
        contentBottom: "webinars",
      },
      {
        contentUp: "We connect people from",
        images: ConnectImage,
        number: "100",
        contentBottom: "countries",
      },
    ],
  };
  render() {
    return (
      <Wrapper>
        {this.state.ElementsSectionTwo.map((item) => (
          <WrapperElementBox>
            <AddImage
              className="SizeImageInMedia"
              icons={item.images}
              width="260px"
              height="260px"
              margin="25px 30px"
            />
            <Paragraph className="textContent">{item.contentUp}</Paragraph>
            <ParagraphHeading
              className="FontSizeClassNumber"
              secondary
              height
              OrangeParagraph
            >
              {item.number}
            </ParagraphHeading>
            <Paragraph className="textContent">{item.contentBottom}</Paragraph>
          </WrapperElementBox>
        ))}
      </Wrapper>
    );
  }
}

export default ComponentSectionThree;
