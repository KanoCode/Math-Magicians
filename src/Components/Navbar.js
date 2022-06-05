import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  //button 
  button{
    display:none;
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
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    div {
      display: none;
    }
    button {
      z-index: 2;
      display:block;
      border: none;
      cursor: pointer;
      width: 30%;
      background: transparent;
      font-size: 24px;
    }
    .active {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 90%;
      top: 3px;
      z-index: 1;
      background: #e3e3e3;
      bottom: 66px;
      box-shadow: 35px 35px 70px #8a8a8a, -35px -35px 70px #c2c2c2;
    }
  }
`;
const NavBar = () => {
  const [NavIsActive, toggleActiveNav] = useState(false);
  return (
    <>
      {' '}
      <StyledNav>
        <h1>𝘔𝘢𝘵𝘩 𝘔𝘢𝘨𝘪𝘤𝘪𝘢𝘯𝘴</h1>
        <div className={NavIsActive ? 'active' : ''}>
          {' '}
          <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/Home">
            Home
          </Link>
          <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/calculator">
            Calculator
          </Link>
          <Link onClick={() => toggleActiveNav(!NavIsActive)} to="/quote">
            Quote
          </Link>
        </div>
        <button onClick={() => toggleActiveNav(!NavIsActive)} type="button">
          {NavIsActive ? <FaTimes /> : <FaBars />}
        </button>
      </StyledNav>
    </>
  );
};

export default NavBar;
