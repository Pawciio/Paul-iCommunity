import React from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/menu/menuRantagle.png";

const Wrapper = styled.nav`
  flex-direction: column;
  margin: 20px 10px;
  position: fixed;
  right: 0;
  top: 10vh;
  z-index: 10;

  .squareMenu {
    width: 80px;
    height: 80px;
  }

  .active {
    opacity: 1;
  }
`;

const MenuImage = styled.div`
  background-image: url(${MenuIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 50px;
  height: 50px;
  margin: 30px;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Navigation = () => {
  window.addEventListener("scroll", () => {
    const squareMenuCollection = document.querySelectorAll(".squareMenu > div");
    const sectionCollection = document.querySelectorAll(
      ".constentSection_handlerMenu"
    );

    for (let i = 0; i < sectionCollection.length; i++) {
      const sectionElementHeightTotal = sectionCollection[
        i
      ].getBoundingClientRect().top;
      const sectionValueHeightToAddActiveClass =
        sectionElementHeightTotal - window.innerHeight / 2;
      const sectionValueToRemoveActiveClass =
        sectionCollection[i].scrollHeight + sectionValueHeightToAddActiveClass;

      if (
        sectionValueHeightToAddActiveClass <= 0 &&
        sectionValueToRemoveActiveClass > 0
      ) {
        squareMenuCollection[i].classList.add("active");
      } else {
        squareMenuCollection[i].classList.remove("active");
      }
    }
  });

  return (
    <Wrapper>
      <a href="#home" id="homeNav" className="squareMenu">
        <MenuImage className="active" />
      </a>
      <a href="#sectionOne" id="sectionOneNav" className="squareMenu">
        <MenuImage />
      </a>
      <a href="#sectionTwo" id="sectionTwoNav" className="squareMenu">
        <MenuImage />
      </a>
      <a href="#sectionThree" id="sectionThreeNav" className="squareMenu">
        <MenuImage />
      </a>
      <a href="#sectionFour" id="sectionFourNav" className="squareMenu">
        <MenuImage />
      </a>
      <a href="#sectionFive" id="sectionFiveNav" className="squareMenu">
        <MenuImage />
      </a>
    </Wrapper>
  );
};

export default Navigation;
