import React, { Component } from 'react';
import Calculator from './Components/calculator';
import NavBar from './Components/Navbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="calc-wrap">
          <Calculator />
        </div>
      </>
    );
  }
}

export default App;
