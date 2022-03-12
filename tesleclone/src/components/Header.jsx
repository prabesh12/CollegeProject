import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  background-color: blue;
  z-index: 10;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-transform: uppercase;
    flex-wrap: nowrap;
    font-wight: 600;
    padding: 0 10px;
  }
  @media (max-width: 768px){
      display:none;
  }
`;
const RightMenu = styled.div`
display: flex;
align-items:center;
  a {
    text-transform: uppercase;
    font-wight: 600;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
cursor: pointer`;
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;