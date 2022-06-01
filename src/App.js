import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';

import './App.css';
import Home from './Components/pages/Home';
import Calculator from './Components/calculator';
import Quotes from './Components/pages/quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Home" element={<Home />} />
          <Route path="quote" element={<Quotes />} />
        </Routes>
      </>
    );
  }
}

export default App;
