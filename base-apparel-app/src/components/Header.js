import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  /* 2rem equals 32px */
  padding: 2rem;

  img {
    width: 100px;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <img src={props.logo} alt={props.altText} />
    </StyledHeader>
  );
};

export default Header;
