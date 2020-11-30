import React from "react";
import styled from "styled-components";
import Share from "../../../assets/iconSVG/share.svg";
import facebookIcon from "../../../assets/SocialMediaIcon/facebook.png";
import pintrestIcon from "../../../assets/SocialMediaIcon/pintrest.png";
import twitterIcon from "../../../assets/SocialMediaIcon/twitter.png";
import youtubeIcon from "../../../assets/SocialMediaIcon/youtube.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShareIconBox = styled.div`
  display: flex;

  .shareImage {
    margin: 10px;
  }
`;

const ShareIcon = () => {
  const imageItems = [
    {
      anchor: "https://www.facebook.com/",
      image: facebookIcon,
      alt: "facebookIcon",
    },
    {
      anchor: "https://twitter.com/?lang=en",
      image: twitterIcon,
      alt: "twitterIcon",
    },
    {
      anchor: "https://pl.pinterest.com/",
      image: pintrestIcon,
      alt: "pintrestIcon",
    },
    {
      anchor: "https://www.youtube.com/",
      image: youtubeIcon,
      alt: "youtubeIcon",
    },
  ];
  return (
    <Wrapper>
      <img src={Share} alt="shareIcon" />
      <ShareIconBox>
        {imageItems.map((item) => (
          <a
            className="shareImage"
            href={item.anchor}
            target="_blank"
            rel="noreferrer"
            key={item.alt}
          >
            <img src={item.image} alt={item.alt} />
          </a>
        ))}
      </ShareIconBox>
    </Wrapper>
  );
};

export default ShareIcon;
