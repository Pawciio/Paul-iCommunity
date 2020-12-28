import React from "react";
import styled from "styled-components";
import AddImage from "../../atoms/ImageHendling/AddImage";
import ImportantWord from "../../atoms/Paragraph/ImportantWord";
import Image1 from "../../../assets/section4Icon/section4image1.png";
import Image2 from "../../../assets/section4Icon/section4image2.png";
import Image3 from "../../../assets/section4Icon/section4image3.png";
import Image4 from "../../../assets/section4Icon/section4image4.png";

const Wrapper = styled.section`
  text-align: center;
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

const WrapperBoxes = styled.div`
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
  max-width: 420px;
  margin: 10px;
  position: relative;

  .popup {
    position: relative;
  }

  .popup::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.PaddingOrange};
    width: 100%;
    height: 100%;
  }

  .popup::after {
    content: "Feeding the homeless and people in need, as one of our charity work.";
    position: absolute;
    text-align: center;
    max-width: 300px;
    bottom: 100px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

class ComponentSectionFour extends React.Component {
  state = {
    ElementsSectionFour: [
      {
        images: Image1,
        content:
          "Feeding the homeless and people in need, as one of our charity work.",
      },
      {
        images: Image2,
        content:
          "Feeding the homeless and people in need, as one of our charity work.",
      },
      {
        images: Image3,
        content:
          "Feeding the homeless and people in need, as one of our charity work.",
      },
      {
        images: Image4,
        content:
          "Feeding the homeless and people in need, as one of our charity work.",
      },
    ],
  };

  togglePopup = (e) => e.target.closest(".Image").classList.toggle("popup");

  render() {
    return (
      <Wrapper>
        <WrapperBoxes>
          {this.state.ElementsSectionFour.map((item) => (
            <WrapperElementBox>
              <AddImage
                className="Image"
                icons={item.images}
                width="310px"
                height="400px"
                margin="25px 0"
                onMouseEnter={this.togglePopup}
                onMouseLeave={this.togglePopup}
              />
            </WrapperElementBox>
          ))}
        </WrapperBoxes>
        <ImportantWord>
          HELPING PEOPLE IN DIFFICULT LIFE SITUATIONS
        </ImportantWord>
      </Wrapper>
    );
  }
}

export default ComponentSectionFour;
