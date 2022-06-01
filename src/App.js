import React, { Component } from 'react';
import Calculator from './Components/calculator';
import NavBar from './Components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Calculator />
      </>
    );
  }
}

export default App;
