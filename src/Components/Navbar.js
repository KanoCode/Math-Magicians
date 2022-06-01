import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  height: 60px;
  width: 90%;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-between;
  div {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  a {
    width: 20%;
    text-align: center;
    font-size: 20px;
    height: 40px;
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(45deg, #e6e6e6, #ffffff);
  }
`;
const NavBar = () => (
  <>
    {' '}
    <StyledNav>
      <h1>𝘔𝘢𝘵𝘩 𝘔𝘢𝘨𝘪𝘤𝘪𝘢𝘯𝘴</h1>
      <div>
        {' '}
        <Link to="/Home">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </StyledNav>
  </>
);

export default NavBar;
