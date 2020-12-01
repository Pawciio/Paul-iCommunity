import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/iconSVG/Logo.svg";
import BackgroundHeadingBox from "../../molecules/BackgroundHeadingBox/BackgroundHeadingBox";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Header = () => (
  <Wrapper>
    <div>
      <img src={Logo} alt="logo" />
    </div>
    <BackgroundHeadingBox />
  </Wrapper>
);

export default Header;
