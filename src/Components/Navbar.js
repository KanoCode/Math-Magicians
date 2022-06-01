import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content:space-between;
  border: solid 2px green;
  div{
      background:pink;
      width:60%;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
  }
  button {
  
    cursor:pointer;
  }
`;
const NavBar = () => (
  <StyledNav>
    <h1>𝘔𝘢𝘵𝘩 𝘔𝘢𝘨𝘪𝘤𝘪𝘢𝘯𝘴</h1>
    <div>
      {' '}
      <button type="button">Home</button>
      {/* <Link to="/pagesinvoices">Calculator</Link>
      <Link to="/pagesinvoices">Quote</Link> */}
    </div>
  </StyledNav>
);

export default NavBar;
