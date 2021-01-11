import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph/Paragraph";
import PlayerButton from "../../../assets/background/PlayerButton.png";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  margin: 35px;
  padding: 10px;
  background: #ff5c38;
  cursor: pointer;
  border: none;

  .buttonPlayer {
    position: relative;
  }

  .buttonPlayer::before {
    content: "";
    width: 2px;
    height: 71px;
    left: -15px;
    top: -10px;
    background: whitesmoke;
    position: absolute;
  }

  @media all and (max-width: 950px) {
    .buttonPlayer img {
      width: 27px;
    }
    .buttonPlayer::before {
      height: 55px;
    }
  }
`;

const TextContainer = styled.div`
  margin: 0 40px;
  color: white;
  text-align: center;

  .buttonText {
    font-size: 30px;
    text-transform: uppercase;
  }

  @media all and (max-width: 950px) {
    margin: 0 20px;
    .buttonText {
      font-size: 20px;
    }
  }
  @media all and (max-width: 575px) {
    .buttonText {
      font-size: 16px;
    }
  }
`;

const PlayVideoButton = ({ handleOpenMoadl }) => (
  <Wrapper onClick={handleOpenMoadl}>
    <TextContainer>
      <Paragraph className="buttonText">Click here to play</Paragraph>
    </TextContainer>
    <div className="buttonPlayer">
      <img src={PlayerButton} alt="player" />
    </div>
  </Wrapper>
);

export default PlayVideoButton;
