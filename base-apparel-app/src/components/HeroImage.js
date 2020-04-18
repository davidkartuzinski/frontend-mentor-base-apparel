import React, { useState, useEffect } from "react";
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
`;

const StyledImg = styled.img`
  width: 100%;
  display: block;
  @media only screen and (min-width: 1440px) {
    height: 800px;
    width: auto;
  }
`;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  // save the current window size in state object
  let [windowWidth, setWindowWidth] = useState(getWidth());

  // execute useEffect only once because
  // it does not have any optionalDependencies
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWindowWidth(getWidth()), 150);
    };
    // set resizeListener
    window.addEventListener("resize", resizeListener);

    // clean up functions
    return () => {
      // remove resize resizeListener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return windowWidth;
}

export default function HeroImage(props) {
  let width = useCurrentWidth();
  console.log(width);
  return (
    <StyledImgDiv className="hero-image-wrapper">
      <StyledImg
        src={width > 1439 ? props.desktopSrc : props.mobileSrc}
        alt={props.altText}
      />
    </StyledImgDiv>
  );
}
