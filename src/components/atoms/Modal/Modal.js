import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
  z-index: 999;

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <Wrapper>
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls={true}
            height={"80vh"}
            width={"100%"}
            playing={show === true ? true : false}
          />
        </section>
      </div>
    </Wrapper>
  );
};

export default Modal;
