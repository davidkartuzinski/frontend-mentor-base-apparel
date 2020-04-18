import React from "react";
import styled from "styled-components";

const StyledImgDiv = styled.div`
  position: relative;
  display: inline-block;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 3000px rgba(90, 0, 0, 0.1) inset;
  }
  /* @media only screen and (min-width: 1440px) {
    grid-column: 6 / span 5;
    justify-self: end;
  } */
`;

const StyledImg = styled.img`
  width: 100%;
  display: block;
  @media only screen and (min-width: 1440px) {
    height: 800px;
    width: auto;
  }
`;

const HeroImage = (props) => {
  const windowWidth = document.documentElement.clientWidth;

  return (
    <StyledImgDiv className="hero-image-wrapper">
      <StyledImg
        src={windowWidth > 1439 ? props.desktopSrc : props.mobileSrc}
        alt={props.altText}
      />
    </StyledImgDiv>
  );
};

export default HeroImage;
