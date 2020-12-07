import React from "react";
import styled from "styled-components";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ParagraphHeading from "../../atoms/Paragraph/ParagraphHeading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ElipseIconConnectiong from "../../../assets/section2Icon/Ellipse1.png";
import ElipseIconHelping from "../../../assets/section2Icon/Ellipse2.png";
import ElipseIconSocialMedia from "../../../assets/section2Icon/Ellipse3.png";

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

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 30px 0;
    text-align: center;
  }

  .title::before {
    content: "";
    position: absolute;
    width: 90px;
    height: 3px;
    background-color: ${({ theme }) => theme.OrangeColor};
    bottom: -15px;
  }

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
  }

  @media all and (max-width: 575px) {
    .textContent {
      font-size: 14px;
    }
    .SizeImageInMedia {
      width: 160px;
      height: 160px;
    }
  }
`;

class ComponentSectionTwo extends React.Component {
  state = {
    ElementsSectionTwo: [
      {
        images: ElipseIconConnectiong,
        title: "CONNECTING PEOPLE FROM AROUND THE WORLD",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.",
      },
      {
        images: ElipseIconHelping,
        title: "HELPING LONELY ONES IN FINDING FRIENDS",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.",
      },
      {
        images: ElipseIconSocialMedia,
        title: "SOCIAL NETWORK ON YOUR SMARTPHONE OR TABLET",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.",
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
              width="230px"
              height="230px"
              margin="25px 0"
            />
            <ParagraphHeading title className="title" OrangeParagraph>
              {item.title}
            </ParagraphHeading>
            <Paragraph className="textContent">{item.content}</Paragraph>
          </WrapperElementBox>
        ))}
      </Wrapper>
    );
  }
}

export default ComponentSectionTwo;
