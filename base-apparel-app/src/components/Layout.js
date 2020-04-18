import React from "react";
import styled from "styled-components";
import Background from "../images/bg-pattern-desktop.svg";

const StyledLayout = styled.div`
  position: relative;
  width: 375px;
  display: block;
  margin: 0 auto;

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    display: grid;
    grid-template-columns: 165px auto 610px;
    grid-template-rows: 65px 169px auto;
    background: url(${Background}) no-repeat;
    background-size: 820px 800px;

    header {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
      justify-self: start;
      padding: 0;

      img {
        width: 158px;
      }
    }

    main {
      grid-column: 2 / span 1;
      grid-row: 3 / span 1;
      justify-self: start;
      width: 440px;

      h1 {
        text-align: left;
        font-size: 64px;
        text-shadow: none;
        line-height: 70px;
      }

      p {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        padding: 0;
      }

      fieldset {
        padding: 0;
        overflow: visible;
      }

      fieldset input {
        padding: 1em 1.8em 0.9em;
        font-size: 16px;
        width: 400px;
      }

      fieldset button {
        padding: 1em 2.5em 0.6em 2.6em;
        font-size: 18px;
        margin-left: -100px;
        top: 4px;
        -webkit-box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);
        -moz-box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);
        box-shadow: -1px 10px 8px 5px rgba(66, 58, 58, 0.075);
      }
    }

    .hero-image-wrapper {
      grid-column: 3 / span 1;
      justify-self: end;
    }
  }
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
