import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 9;
  background-color: rgb(244, 244, 245);
`;
const Nav = styled.div`
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 60px;
  width: 300px;
`;

const NavItem = styled.div`
display: flex;
  align-items: center;
  a{
    margin-left: 20x;
  }
  a img{
    width: 30px;
    height: 2em;
    margin: 0 8px;
  }
}
`;
const Search = styled.div`
  width: 500px;
  display: flex;
`;
const SearchBox = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #d1d1d1;
  text-transform: capitalize;
  background: none;
  color: #a9a9a9;
  outline: none;
  &::placeholder {
    color: #a9a9a9;
  }
`;
const SearchBtn = styled.button`
  width: 20%;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #383838;
  border-top-right-radius: 10px;
  color: white;
  border-bottom-right-radius: 10px;
`;

function Header() {
  return (
    <Navbar>
      <Nav>
        <Link to="/dashboard"><Logo src="images/logo.svg" />
        </Link>
        <NavItem>
          <Search>
            <SearchBox
              Id="searchBar"
              type="text"
              placeholder="Search product"
            />
            <SearchBtn Id="searchBtn">Search</SearchBtn>
          </Search>
          <Link to="/dashboard" id="dashboard">
            DashBoard
          </Link>
          <Link to="/products" id="products">
            Products
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
