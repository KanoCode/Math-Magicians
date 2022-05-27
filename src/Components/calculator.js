import './calculator.css';
import React from 'react';
import Button from './Button';
import calculate from './logic/calculate';
// import operate from './logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.updateCalc = this.updateCalc.bind(this);
  }

  updateCalc(btnVal) {
    this.setState((state) => calculate(state, btnVal));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <ul className="container">
        <li className="firstRow">
          {' '}
          <p>
            {operation === 'A/C' ? null : operation}
            {' '}
            {next}
          </p>
          <p className="result">{total === null ? 0 : total}</p>
        </li>
        <li className="secondRow">
          <Button text="A/C" updateCalc={this.updateCalc} />
          <Button text="+/-" updateCalc={this.updateCalc} />
          <Button text="%" updateCalc={this.updateCalc} />
          <Button text="÷" updateCalc={this.updateCalc} />
        </li>
        <li className="thirdRow">
          <Button text="7" updateCalc={this.updateCalc} />
          <Button text="8" updateCalc={this.updateCalc} />
          <Button text="9" updateCalc={this.updateCalc} />
          <Button text="x" updateCalc={this.updateCalc} />
        </li>
        <li className="fourthRow">
          <Button text="4" updateCalc={this.updateCalc} />
          <Button text="5" updateCalc={this.updateCalc} />
          <Button text="6" updateCalc={this.updateCalc} />
          <Button text="-" updateCalc={this.updateCalc} />
        </li>
        <li className="fifthRow">
          <Button text="1" updateCalc={this.updateCalc} />
          <Button text="2" updateCalc={this.updateCalc} />
          <Button text="3" updateCalc={this.updateCalc} />
          <Button text="+" updateCalc={this.updateCalc} />
        </li>
        <li className="lastRow">
          <Button text="0" updateCalc={this.updateCalc} />
          <Button text="." updateCalc={this.updateCalc} />
          <Button text="=" updateCalc={this.updateCalc} />
        </li>
      </ul>
    );
  }
}

export default Calculator;
