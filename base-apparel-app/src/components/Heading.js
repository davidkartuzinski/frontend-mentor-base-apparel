import React from "react";
import styled from "styled-components";

const StyledH1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledH1 = styled.h1`
  text-align: center;
  color: hsl(0, 6%, 24%);
  text-transform: uppercase;

  letter-spacing: 10.83px;
  line-height: 2.6rem;
  font-size: 2.5rem;

  span {
    color: hsl(0, 36%, 70%);
    display: block;
    font-weight: 200;
    text-shadow: none;
  }
`;

const Heading = (props) => {
  return (
    <StyledH1Wrapper>
      <StyledH1>
        <span>{props.span}</span>
        {props.h1text}
      </StyledH1>
    </StyledH1Wrapper>
  );
};

export default Heading;
