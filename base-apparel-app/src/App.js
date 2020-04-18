import React from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Header from "./components/Header";
import Heading from "./components/Heading";
import HeroImage from "./components/HeroImage";
import EmailInput from "./components/EmailInput";
import { Logo, HeroMobile, HeroDesktop } from "./images/index";

const GlobalStyles = createGlobalStyle` 

    /* Box sizing rules */
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default padding */
    ul[class],
    ol[class] {
    padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* Remove list styles on ul, ol elements with a class attribute */
    ul[class],
    ol[class] {
    list-style: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
    max-width: 100%;
    display: block;
    }

    /* Natural flow and rhythm in articles by default */
    article > * + * {
    margin-top: 1em;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    
    body {
        background-color: #FFF4F4;
        font-size: 16px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: normal;
    }
    
    .hero-image-wrapper {
    margin-bottom: 4rem;
    }
    
    h1 {
        margin-bottom: 1rem;
    }
    
    p {
        font-size: .88rem;
        color: hsl(0, 36%, 70%);
        padding: 0 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header logo={Logo} altText="Logo for Base Apparel" />
        <HeroImage
          mobileSrc={HeroMobile}
          desktopSrc={HeroDesktop}
          altText="Hero image"
        />
        <Main>
          <Heading h1text="Coming Soon" span="We're" />
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <EmailInput />
        </Main>
      </Layout>
    </>
  );
};

export default App;
