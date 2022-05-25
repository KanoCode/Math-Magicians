import './calculator.css';
import React from 'react';
import ButtonRow from './buttons-rows';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="container">
        <ButtonRow className="firstRow" />
        <ButtonRow className="secondRow" />
        <ButtonRow className="thirdRow" />
        <ButtonRow className="fourthRow" />
        <ButtonRow className="fifthRow" />
        <ButtonRow className="last" />
      </ul>
    );
  }
}

export default Calculator;
