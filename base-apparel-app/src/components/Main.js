import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
